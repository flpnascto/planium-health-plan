import { IPlan } from '../interfaces/IPlan';
import { FileType, HandleFile } from './HandleFile';

interface IPlansJson {
  registro: string,
  nome: string,
  codigo: number
}

export default class PlansModel {
  private fileType: FileType = 'plans';

  private handleFile = new HandleFile();

  public async getAll(): Promise<IPlan[]> {
    const result = await this.handleFile.readFile<IPlansJson[]>(this.fileType);
    const plans = result.map((plan) => {
      return { register: plan.registro, name: plan.nome, code: plan.codigo };
    })
    return plans;
  }

  public async getByRegister(register: string): Promise<IPlan | null> {
    const plans = await this.getAll();
    const plan = plans.find((plan) => plan.register === register);
    if (plan === undefined) {
      return null;
    }
    return plan;
  }
}