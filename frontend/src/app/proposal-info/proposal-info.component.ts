import { Component, OnInit } from '@angular/core';
import { ProposalDataService } from '../shared/proposal-data.service';
import { IProposal } from '../shared/models/proposal.model';

@Component({
  selector: 'app-proposal-info',
  templateUrl: './proposal-info.component.html',
  styleUrls: ['./proposal-info.component.css']
})
export class ProposalInfoComponent implements OnInit {
  proposal: IProposal = {
    clients: [],
    totalPrice: 0,
  };

  constructor(private proposalDataService: ProposalDataService) { }

  ngOnInit() {
    this.proposalDataService.getProposal().subscribe((proposal) => {
      this.proposal = proposal;
    });
  }
}
