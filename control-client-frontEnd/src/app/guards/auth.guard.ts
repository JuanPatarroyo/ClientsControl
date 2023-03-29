import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private afAuth: AngularFireAuth) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.pipe(
            map(auth => {
                if (!auth) {
                    this.router.navigate(['/login']);
                    return false;
                } else {
                    return true;
                }
            }));
    }
}