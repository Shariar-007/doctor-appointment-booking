import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
