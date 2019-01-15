import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debug } from 'util';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {
  person$:Observable<any[]>;
  person2$:Observable<any[]>;
  key$:Observable<any[]>;
 
  constructor(private person: PersonService) { 
    this.person$=this.person.getPersonList();
    this.key$=this.person.getAll2();
    
    
    
  }

  ngOnInit() {
  }

  edit(personId){
    debugger;
  }
  edit2(personId2){
    console.log(personId2.key);
    debugger;
  }

}
