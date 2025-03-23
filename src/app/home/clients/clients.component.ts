import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.models';
import { slideConfig } from 'src/app/models/slide-config.module';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: Client[] = []
  slideConfig = new slideConfig()

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.slideConfig.showDots = false;
    this.slideConfig.showLeftRightArrow = true;
    this.slideConfig.autoPlay = false;
    this.getAllClients();
  }
  getAllClients() {
    this.httpClient.get('assets/data/clients.json').subscribe({
      next: (clients) => {

        this.clients = clients as Client[];

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
