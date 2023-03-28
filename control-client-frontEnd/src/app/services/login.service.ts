import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Report } from "notiflix";
import { map } from "rxjs";

@Injectable()
export class LoginService {
    constructor(private authService: AngularFireAuth) { }

    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password)
                .then(response => resolve(response),
                    error => reject(error))
        });
    }

    getAuth() {
        return this.authService.authState.pipe(
            map(auth => auth)
        )
    }

    logout() {
        this.authService.signOut().then(() => {
            Report.success(
                'Logout',
                'We\'ll hope see you soon!',
                'Okay',
            );
        });
    }
}