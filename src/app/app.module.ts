
import { CreatePersonComponent } from './create-person/create-person.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatTableModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatPaginatorModule, MatSortModule } from '@angular/material';
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
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { CountryService } from './services/country.service';
import { PersonService } from './services/person.service';
import {CustomFormsModule} from 'ng2-validation';
import { ViewPersonComponent } from './view-person/view-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainContentComponent,
    PersonComponent,
    UserComponent,
    CreatePersonComponent,
    NotFoundComponent,
    ViewPersonComponent,
    EditPersonComponent,
    
  ],
  imports: [
    BrowserModule,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    CustomFormsModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFirestoreModule
    


    
    
  ],
  providers: [
    CountryService,
    PersonService,
    AngularFireDatabase,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}


// npm uninstall angularfire2
// npm install angularfire2@5.0.0-rc.9
// firebase use --add projectId
// npm install --save firebase