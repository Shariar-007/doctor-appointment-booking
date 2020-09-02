import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoctorListComponent} from './components/doctor-list/doctor-list.component';
import {AppComponent} from './app.component';
import {BookingDoctorComponent} from './components/booking-doctor/booking-doctor.component';
import {BookingFormComponent} from './components/booking-form/booking-form.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'staff'},
  {path: 'staff', component: DoctorListComponent},
  {path: 'book/:id', component: BookingDoctorComponent},
  {path: 'book/:id/form', component: BookingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
