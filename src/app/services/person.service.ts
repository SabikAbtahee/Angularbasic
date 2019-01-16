import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {person} from './person.interface';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  test1;
  person:AngularFireObject<person>=null;
  constructor(private db: AngularFireDatabase) { }



  create(information){
    
    return this.db.list('/Person').push(information);
  }
  getPersonList(){
    return this.db.list('/Person').valueChanges();
  }
  getPerson(personId:string){
    
    return this.db.object('/Person'+personId);
    // this.person=this.db.object(`'/Person/'+${personId}`);
    // debugger;
    // return this.person;
    
  }
  getPersonsID(){
    return this.db.list('/Person').snapshotChanges();

  }
  test(personId:string){
      return this.db.list('/Person/'+personId).valueChanges().subscribe(teset=>{
        this.test1=teset;
        console.log((this.test1)[0]);
        // debugger;
  });    
  }
  // get(productId) { 
  //   return this.db.object('/products/' + productId);
  // }

  update(personId, person) { 
    return this.db.object('/person/edit/' + personId).update(person);
  }

  // changeCurrentPerson(person){
  //   this.currentPerson.next(person);
  // }
}
