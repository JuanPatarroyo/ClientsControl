import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Configuration } from "../model/configuration.model";

@Injectable()
export class ConfigurationService{
    configurationDoc!: AngularFirestoreDocument<Configuration>;
    configuration!: Observable<Configuration | undefined>;
    // unique id configured in firebase
    id = "1";

    constructor(private db: AngularFirestore){

    }

    getConfiguration(): Observable<Configuration | undefined> {
        this.configurationDoc = this.db.doc<Configuration>(`configuration/${this.id}`);
        this.configuration = this.configurationDoc.valueChanges();
        return this.configuration;
    }

    modifyConfiguration(configuration: Configuration){
        this.configurationDoc = this.db.doc<Configuration>(`configuration/${this.id}`);
        this.configurationDoc.update(configuration);
    }

}