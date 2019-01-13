import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  countries=[
    "Bangladesh","Singapore","SwitzerLand","Dubai","America",
  ];
  constructor() { }

  ngOnInit() {
  }

}
