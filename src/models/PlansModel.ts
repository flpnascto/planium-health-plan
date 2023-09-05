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
      return { register: plan.registro, name: plan.nome };
    })
    return plans;
  }
}