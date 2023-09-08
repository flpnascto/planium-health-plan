import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProposalDataService } from '../shared/proposal-data.service';
import { IClient } from '../shared/models/client.model'; // Importe a interface IClient
import { IProposal } from '../shared/models/proposal.model';


const API_URL = 'http://localhost:3000';
const plansRoute = `${API_URL}/plans`;
const proposalRoute = `${API_URL}/proposal`;


interface IPlan {
  register: string;
  name: string;
  code: number;
}

interface IItem {
  name: string;
  age: number;
}

@Component({
  selector: 'proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css']
})
export class ProposalFormComponent {
  
  clientQuantity: number = 1;
  plans: IPlan[]= [];
  selectedPlan: string = '';
  clientData: IItem[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private proposalDataService: ProposalDataService
  ) {}

  ngOnInit() {
    this.http.get(plansRoute)
      .subscribe((response) => {
        this.plans = response as IPlan[];
        if (this.plans.length > 0) {
          this.selectedPlan = this.plans[0].register;
        }
        console.log('Planos carregados com sucesso:', this.plans);
      }, error => {
        console.error('Erro ao requisitar os planos:', error);
      });
  }

  updateClientData(clientData: IItem) {
    // Certifique-se de que o clientData seja válido antes de adicioná-lo à matriz
    if (clientData.name && clientData.age >= 0) {
      this.clientData.push(clientData);
    }
    console.log('Dados do cliente:', this.clientData);
  }


  register() {
    const data = {
      planRegister: this.selectedPlan,
      items: this.clientData,
    }

    this.http.post(proposalRoute, data)
      .subscribe((response) => {
        console.log('Proposta registrada com sucesso:', response);
        this.proposalDataService.setProposal(response as IProposal);
        this.router.navigate(['/proposal']);
      }, error => {
        console.error('Erro ao registrar a proposta:', error);
      });
  }
}
