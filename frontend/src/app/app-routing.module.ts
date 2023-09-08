import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalFormComponent } from './proposal-form/proposal-form.component';
import { ProposalInfoComponent } from './proposal-info/proposal-info.component';


const routes: Routes = [
  { path: 'cadastro', component: ProposalFormComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  { path: 'proposal', component: ProposalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
