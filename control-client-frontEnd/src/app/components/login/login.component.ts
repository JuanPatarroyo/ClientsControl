import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'notiflix';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private router: Router){
    
  }

  login(){

  }
}
