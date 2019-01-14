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
  constructor(private person: PersonService) { 
    this.person$=this.person.getAll().valueChanges();
  }

  ngOnInit() {
  }

  edit(personId){
    
  }

}
