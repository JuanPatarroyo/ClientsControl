import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  client: Client = {
    id: '',
    name: '',
    last_name: '',
    email: '',
    saldo: 0
  };
  id!: string;

  constructor(private clientService: ClientService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      if (client != null) {
        this.client = client;
      }
    });
  }

  saveClient(form: NgForm) {

  }

  delete() {

  }
}
