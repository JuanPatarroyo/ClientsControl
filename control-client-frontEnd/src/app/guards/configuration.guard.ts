import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { config, map, Observable } from "rxjs";
import { ConfigurationService } from "../services/configuration.service";

@Injectable()
export class ConfigurationGuard implements CanActivate {

    constructor(private router: Router, private confService: ConfigurationService) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.confService.getConfiguration().pipe(
            map(configuration => {
                if (configuration?.allowRegister) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            }));
    }
}