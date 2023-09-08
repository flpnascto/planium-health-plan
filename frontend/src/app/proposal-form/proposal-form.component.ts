import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';
const plansRoute = `${API_URL}/plans`;

interface IPlan {
  register: string;
  name: string;
  code: number;
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPlans();
    // this.http.get(plansRoute)
    //   .subscribe(response => {
    //     const plans = response as IPlan[];
    //     this.selectedPlan = plans[0].register;
    //     console.log('Cadastro realizado com sucesso:', response);
    //   }, error => {
    //     console.error('Erro ao requisitar os planos:', error);
    //   });
  }

  fetchPlans() {
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


  register() {
    const data = {
      clientQuantity: this.clientQuantity,
      selectedPlan: this.selectedPlan
    }
  }
}
