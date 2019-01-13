
import { CreatePersonComponent } from './create-person/create-person.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatTableModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainContentComponent } from './main-content/main-content.component';
import {MatMenuModule} from '@angular/material/menu';
import { PersonComponent } from './person/person.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  {
    path     : 'user',
    component: UserComponent
  },
  {
    path     : 'person',
    component: PersonComponent
  },
  {
    path     : 'person/create',
    component: CreatePersonComponent
  },
  {
    path      : '',
    redirectTo: '/user',
    pathMatch : 'full'
  },
  {
    path      : 'imrulVai',
    
    component: MainContentComponent
  },
  
  { path: '**', 
  component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainContentComponent,
    PersonComponent,
    UserComponent,
    CreatePersonComponent,
    NotFoundComponent,
    
    
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    // FormGroup,
    // FormControl,
    // Validators,
    // FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
