import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {
  person$:Observable<any[]>;
  personsID$;

  constructor(private person: PersonService) { 

    this.person$=this.person.getPersonList();
    this.personsID$=this.person.getPersonsID();
  }

  ngOnInit() {
  }

  edit(personId){
    // console.log(personId.key);
  }

}
