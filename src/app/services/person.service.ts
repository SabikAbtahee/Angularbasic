import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private db: AngularFireDatabase) { }

  create(information){
    
    return this.db.list('/Person').push(information);
  }
  getAll(){
    return this.db.list('/Person');
  }
  getPerson(personId){
    return this.db.object('/person/'+personId).valueChanges();
  }
}
