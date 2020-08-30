import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoctorListComponent} from './components/doctor-list/doctor-list.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
