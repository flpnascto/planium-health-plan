import { Component, Output, EventEmitter, Input } from '@angular/core';

interface IItem {
  name: string;
  age: number;
}

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent {
  @Input() clientName: string = '';
  @Input() clientAge: number = 0;

  @Output() clientDataAdded = new EventEmitter<IItem>();

  addClient() {
    if (this.clientName && this.clientAge >= 0) {
      const clientData = { name: this.clientName, age: this.clientAge };
      console.log(clientData)
      this.clientDataAdded.emit(clientData); 
    }
  }
}
