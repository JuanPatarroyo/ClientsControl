import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NgForm } from '@angular/forms';
import { Report } from 'notiflix';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  clients: Client[] | undefined;
  client: Client = {
    id: '',
    name: '',
    last_name: '',
    email: '',
    saldo: 0
  }

  @ViewChild("btnClose") btnClose: ElementRef | undefined;

  // Modal vars
  closeResult = '';

  constructor(private clientService: ClientService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
      }
    );
  }

  getTotal() {
    let balance: number = 0;
    if (this.clients != null) {
      this.clients.forEach(client => {
        balance += client.saldo;
      })
    }
    return balance;
  }

  addClient(form: NgForm) {
    if(!form.valid){
      Report.failure(
        'Oh no!',
        'Some fields are missing to fill out, check it out',
        'Ok!');
      return;
    }
    this.clientService.addClient(this.client);
    form.resetForm();
    this.modalService.dismissAll();
  }

  /**
   * Open a modal with angular, because the bootstrap component doesn't work
   * @param content 
   */
  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private closeModal(){
    this.btnClose?.nativeElement.click();
  }
}
