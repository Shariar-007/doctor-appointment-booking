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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule} from '@angular/common/http';
import { InMemoryDataServiceService} from './shared/services/in-memory-data-service.service';
import { BookingDoctorComponent } from './components/booking-doctor/booking-doctor.component';
import {NglDatepickersModule, NglModule} from 'ng-lightning';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorListComponent,
    BookingDoctorComponent,
    BookingFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataServiceService, {dataEncapsulation: false}
        ),
        NglDatepickersModule,
        NglModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
