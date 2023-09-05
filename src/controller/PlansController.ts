import { NextFunction, Request, Response} from 'express';
import { FileType, HandleFile } from '../models/HandleFile';
import { IPlan } from '../interfaces/IPlan';


export default class PlansController {
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fileType: FileType = 'plans';
      const handleFile = new HandleFile();
      const test = await handleFile.readFile<IPlan>(fileType);
      res.status(200).json(test);
    }
    catch (error) {
      console.log('Error: ', error);
    }
  }
}