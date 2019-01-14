import { CountryService } from './../services/country.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { PersonService } from '../services/person.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import 'rxjs/add/operator/take'
@Component({
  selector   : 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls  : ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  

  countries$: Observable<any[]>;
  person = {};
  constructor(private countryService: CountryService,
    private personService: PersonService,
    private Route:ActivatedRoute,
    private Router:Router
    
    
    ) {
    this.countries$ = countryService.getCountries();
    let id= this.Route.snapshot.paramMap.get('id');
    if(id) this.personService.getPerson(id).take(1).subscribe(p=>this.person=p);
    
   }
   create(information){
    this.personService.create(information);
    this.Router.navigate(['/person/view']);
   }




    ngOnInit() {
    }

}
