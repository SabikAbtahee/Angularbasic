import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PersonService } from '../services/person.service';
import { Observable } from 'rxjs';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
@Component({
  selector   : 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls  : ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  sub;
  id;
  currentPerson$;
  try;
  constructor(private route: ActivatedRoute,private person: PersonService) { 
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
  //  this.getPersonId();
   this.try=this.person.test(this.id);
   console.log((this.try)[0]);
   debugger;
// 
   
    
   
  }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //  this.id = params['id'];
    //  });
    //  console.log(this.id);
    //  debugger;
   }
   getPersonId(){
    // this.currentPerson$ = this.person.getPerson(this.id);
    // this.currentPerson$ = this.person.getPerson(this.id)
    //     .snapshotChanges().map(res => {
    //        return this.try=res.payload.val();
    //     });
        this.currentPerson$ = this.person.getPerson(this.id)
        .snapshotChanges().map(res => {
           return this.try=res.key.valueOf();
        });
      console.log(this.currentPerson$);
      console.log(this.try);

        // debugger;
    
    
   }
   getPersonId2(){
    this.currentPerson$ = this.person.getPerson(this.id).valueChanges();
    console.log(this.currentPerson$.DOB);
    // debugger;
   }
   



}
