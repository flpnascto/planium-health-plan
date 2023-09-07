import { NextFunction, Request, Response} from 'express';
import PlansModel from '../models/PlansModel';


export default class PlansController {
  private readonly plansModel = new PlansModel();
  
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const plansModel = new PlansModel();
      const plans = await this.plansModel.getAll();
      res.status(200).json(plans);
    }
    catch (error) {
      console.log('Error: ', error);
    }
  }
}