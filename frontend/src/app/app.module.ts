import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposalFormComponent } from './proposal-form/proposal-form.component';
import { FormsModule } from '@angular/forms';
import { ClientInfoComponent } from './client-info/client-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProposalFormComponent,
    ClientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
