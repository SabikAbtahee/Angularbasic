import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PersonComponent } from './person/person.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

const routes: Routes = [
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
    path     : 'person/edit/:id',
    component: EditPersonComponent
  },
  {
    path     : 'person/view',
    component: ViewPersonComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
