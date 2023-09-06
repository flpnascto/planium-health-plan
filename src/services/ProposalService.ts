import { NotFoundException } from '../exceptions';
import { IPrice } from '../interfaces/IPrice';
import { IItem, IProposalOutput } from '../interfaces/IProposal';
import PlansModel from '../models/PlansModel';
import PriceModel from '../models/PriceModel';

export default class ProposalService {
  private items: IItem[] = [];
  private planRegister: string = "";
  private readonly plansModel = new PlansModel();
  private readonly priceModel = new PriceModel();


  public async createProposal(items: IItem[], planRegister: string): Promise<IProposalOutput> {
    this.items = items;
    this.planRegister = planRegister;
    this.validateItems();
    const planCode = await this.validatePlanRegister();
    const proposal = await this.execute(planCode);
    return proposal;

  }

  private async validatePlanRegister(): Promise<number> {
    const plan = await this.plansModel.getByRegister(this.planRegister);
    if (!plan) throw new NotFoundException('Plan register not found');
    return plan.code;
  }

  private validateItems(): void {
    if (this.items.length === 0) {
      throw new Error('Items is empty');
    }
  }

  private getRange(age: number): "rangeA" | "rangeB" | "rangeC" {
    switch (true) {
      case (age <= 17): return "rangeA";
      case (age >= 41): return "rangeC";
      default: return "rangeB";
    }
  }


  private async execute(planCode: number): Promise<IProposalOutput> {
    const prices = await this.priceModel.getById(planCode);
    if (!prices) throw new NotFoundException('Plan not found');
    let quantity: number = -1;
    let priceRange: IPrice
    for (const price of prices) {
      if (price.minimumQuantityLifes <= this.items.length && price.minimumQuantityLifes > quantity) {
        priceRange = price;
        quantity = price.minimumQuantityLifes;
      }
    }

    this.items.forEach((item) => {
      const range = this.getRange(item.age);
      const price = priceRange[`${range}`];
      item.price = price;
    }
    );

    const totalPrice = this.items.reduce((total, item) => total + item.price, 0);

    const proposal = {
      clients: this.items,
      totalPrice
    }
    return proposal
  }
}