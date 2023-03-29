import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from 'src/app/services/configuration.service';
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
  allowRegister !: boolean | undefined;

  constructor(private loginService: LoginService, private router: Router, private configurationService: ConfigurationService) {

  }

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      this.isLoggedIn = auth != null;
      this.userIn = auth != null ? auth.email : null;
    });
    this.configurationService.getConfiguration().subscribe( configuration =>{
      this.allowRegister = configuration?.allowRegister;
    });
  }

  logout() {
    this.loginService.logout().then(() => {
      debugger;
      console.log(this.userIn);
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    });
  }
}
