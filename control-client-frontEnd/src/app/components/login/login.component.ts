import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'notiflix';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit(){
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }

  login() {
    this.loginService.login(this.email, this.password)
      .then(response => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        Report.failure(
          'Oh no!',
          error.message,
          'Okay',
        );
      })
  }
}
