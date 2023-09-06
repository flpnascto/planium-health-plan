import { Request, Response, NextFunction } from 'express';
import { IProposalInput } from '../interfaces/IProposal';
import ProposalService from '../services/ProposalService';

export default class ProposalController {
  private readonly service = new ProposalService();
  public async createProposal(req: Request, res: Response, next: NextFunction) {
    const { items, planRegister } = req.body as IProposalInput;
    try {
      const result = await this.service.createProposal(items, planRegister);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}