import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../shared/models/doctor.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-doctor',
  templateUrl: './booking-doctor.component.html',
  styleUrls: ['./booking-doctor.component.scss']
})
export class BookingDoctorComponent implements OnInit {
  doctor: Doctor;
  date: Date;
  days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  startTime: string;
  endTime: string;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  results: string[] = null;

  constructor(private router: Router) { localStorage.removeItem('time'); }

  ngOnInit(): void {
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
    // console.log(this.doctor);
    this.date = new Date();
    const dayName = this.days[this.date.getDay()];
    if (this.doctor.availibility[dayName]){
      this.getStartAndEndTime(this.doctor.availibility[dayName]);
    }
  }

  dateDisabled = (d: Date): boolean => {
    // const day = d.getDay();
    const dayName = this.days[d.getDay()];
    const weekDayLabels = Object.getOwnPropertyNames(this.doctor.availibility);
    return !weekDayLabels.includes(dayName);
  }

  onAvailableTimeSlotsInDate(){
    this.resetVariable();
    const dayName = this.days[this.date.getDay()];
    if (this.doctor.availibility[dayName]){
      this.getStartAndEndTime(this.doctor.availibility[dayName]);
    } else {
      return;
    }
    this.timeSlots();
  }

  timeSlots(){
    let d = new Date(this.date);
    d.setHours(this.startHour);
    d.setMinutes(this.startMinute);
    let result = '';
    for (let idx = 0; idx < 100; idx++)
    {
      const m = (((d.getMinutes() + 7.5) / 15 | 0) * 15) % 60;
      const h = ((((d.getMinutes() / 105) + .5) | 0) + d.getHours()) % 24;
      d = new Date(d.getFullYear(), d.getMonth(), d.getDay(), h, m, 0, 0);
      const hours = d.getHours();
      let ampm = ' AM';
      let h1 = hours;
      if (h1 >= 12) { h1 = hours - 12; ampm = ' PM'; }
      if (h1 === 0) { h1 = 12; }
      if (idx > 0) { result += ', '; }
      result += ('0' + h1).slice(-2) + ':' + ('0' + m).slice(-2) + ampm;
      if (h1 === this.endHour && m === this.endMinute) {break; }
      d = this.addMinutes(d, 15);
    }
    this.results = result.split(',');
  }

  addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  getStartAndEndTime(val){
    // const val = '10:00 AM - 06:00 PM';
    const arr = val.split(' ');
    this.startTime = arr[0];
    this.endTime = arr[3];
    const arr1 = this.startTime.split(':');
    const arr2 = this.endTime.split(':');
    this.startHour = Number(arr1[0]);
    this.startMinute = Number(arr1[1]);
    this.endHour = Number(arr2[0]);
    this.endMinute = Number(arr2[1]);
  }

  resetVariable(){
    this.results = null;
    this.startHour = 0;
    this.startMinute = 0;
    this.endHour = 0;
    this.endMinute = 0;
  }

  bookTimeSlot(time: string) {
    localStorage.setItem('time', time);
    const url = this.router.url;
    this.router.navigate([`${url}/form`]);
  }
}
