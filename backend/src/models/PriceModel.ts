import { IPrice } from '../interfaces/IPrice';
import { FileType, HandleFile } from './HandleFile';

interface IPriceJson {
  codigo: number;
  minimo_vidas: number,
  faixa1: number;
  faixa2: number,
  faixa3: number
}

export default class PriceModel {
  private fileType: FileType = 'prices';
  private handleFile = new HandleFile();

  public async getAll(): Promise<IPrice[]> {
    const result = await this.handleFile.readFile<IPriceJson[]>(this.fileType);
    const prices = result.map((price) => {
      return {
        planCode: price.codigo,
        minimumQuantityLifes: price.minimo_vidas,
        rangeA: price.faixa1,
        rangeB: price.faixa2,
        rangeC: price.faixa3,
      };
    })
    return prices;
  }

  public async getById(planCode: number): Promise<IPrice[] | null> {
    const prices = await this.getAll();
    const selectsPlans = prices.filter((price) => price.planCode === planCode);
    if (selectsPlans.length === 0) return null;
    return selectsPlans
  }
}