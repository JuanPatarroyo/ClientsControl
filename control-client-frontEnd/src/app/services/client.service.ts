import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from "rxjs";
import { Client } from "../model/client.model";

@Injectable()
export class ClientService{
    clientCollection: AngularFirestoreCollection<Client>;
    clientDoc: AngularFirestoreDocument<Client> | undefined;
    clients: Observable<Client[]> | undefined;
    client: Observable<Client> | undefined;
    
    constructor(private db: AngularFirestore) { 
        this.clientCollection = db.collection<Client>('clients', ref => ref.orderBy('name', 'asc'));
    }

    getClients(): Observable<Client[]>{
        this.clients = this.clientCollection.snapshotChanges().pipe(
            map(item => {
                return item.map( subitem => {
                    const data = subitem.payload.doc.data() as Client; 
                    data.id = subitem.payload.doc.id;
                    return data;
                })
            })
        );
        console.log(this.clients);
        return this.clients;
    }

    addClient(client: Client){
        this.clientCollection.add(client);
    }
}