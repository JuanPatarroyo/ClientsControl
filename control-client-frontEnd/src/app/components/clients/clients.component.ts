import { Component } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  clients: Client[] | undefined;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
      }
    );
  }

  getTotal() {
    let balance: number = 0;
    if(this.clients != null){
      this.clients.forEach(client =>{
        balance += client.saldo;
      })
    }
    return balance;
  }
}
