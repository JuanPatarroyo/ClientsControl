import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/model/configuration.model';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {

  allowRegister: boolean | undefined = false;

  constructor(private router: Router, private configurationService: ConfigurationService) {

  }

  ngOnInit() {
    this.configurationService.getConfiguration().subscribe((configuration: Configuration | undefined) => {
      this.allowRegister = configuration?.allowRegister;
    })
  }

  save() {
    let configuration = {allowRegister: this.allowRegister};
    this.configurationService.modifyConfiguration(configuration);
    this.router.navigate(['/']);
  }
}
