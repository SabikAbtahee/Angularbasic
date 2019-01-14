
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirebaseListObservable ,FirebaseObjectObservable  } from 'angularfire2/database-deprecated';
import { AngularFireDatabase,AngularFireList   } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries=[
    "Bangladesh","Singapore","SwitzerLand","Dubai","America",
  ];


  countries$;
  constructor(private db: AngularFireDatabase) { }

  // getCountries(){
  //   this.db.object(‘Country’).valueChanges();
  //   this.listings = this.db.list('/Country') as FirebaseListObservable<Listing[]>;
  //   return this.listings;
  // }



  getCountries(){
    return this.db.list('/Country').valueChanges();
    // alert(this.users);
    
  }

  // getCountries(){
  //   return this.countries;
  // }
}
