import { IClient } from './client.model';

export interface IProposal {
  clients: IClient[];
  totalPrice: number;
}
