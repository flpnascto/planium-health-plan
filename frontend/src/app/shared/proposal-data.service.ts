import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProposal } from './models/proposal.model';

const initialProposal: IProposal = {
  clients: [],
  totalPrice: 0,
};

@Injectable({
  providedIn: 'root',
})
export class ProposalDataService {
  private proposalSubject = new BehaviorSubject<IProposal>(initialProposal);

  setProposal(proposal: IProposal) {
    this.proposalSubject.next(proposal);
  }

  getProposal() {
    return this.proposalSubject.asObservable();
  }
}
