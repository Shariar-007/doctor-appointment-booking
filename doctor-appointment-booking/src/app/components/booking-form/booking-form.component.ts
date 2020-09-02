import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  appointmentTime: string;
  value = new Date(2010, 8, 30);
  backUrl;

  BookingForm = new FormGroup({
    firstName: new FormControl('',  Validators.required),
    lastName: new FormControl('',  Validators.required),
    email: new FormControl('',  Validators.required),
    phone: new FormControl('',  Validators.required),
    gender: new FormControl('',  Validators.required),
    appointmentTime: new FormControl('',  Validators.required),
    detailReason: new FormControl('',  Validators.required),
  });


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.backUrl = this.router.url;
    this.appointmentTime = localStorage.getItem('time');
    this.backUrl = this.backUrl.replace('/form', '');
    // console.log( this.backUrl);
    this.BookingForm.get('appointmentTime').setValue(this.appointmentTime);
  }

  changeGender(event) {
    this.BookingForm.get('gender').setValue(event.target.value);
  }

  onSubmit() {
    console.log(this.BookingForm.value);
  }
}
