import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private db: AngularFireDatabase) { }

  create(information){
    
    return this.db.list('/Person').push(information);
  }
  getPersonList(){
    return this.db.list('/Person').valueChanges();
  }
  getPerson(personId){
    return this.db.object('/person/'+personId).valueChanges();
  }
  getAll2(){
    return this.db.list('/Person').snapshotChanges();

  }
}
