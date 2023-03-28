import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleNavbar = true;
  isLoggedIn !: boolean;
  userIn !: string | null;

  constructor(private loginService: LoginService, private router: Router){

  }

  ngOnInit(){
    this.loginService.getAuth().subscribe(auth =>{
      this.isLoggedIn = auth != null;
      this.userIn = auth != null ? auth.email : null;
    })
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
