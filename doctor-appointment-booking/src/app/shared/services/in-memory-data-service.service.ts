import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Doctor} from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService{
  appointments: any[];
  constructor() { }

  createDb(){
    const doctors: Doctor[] = [
      {
        name: 'Dr. John Doe',
        org: 'Kings London Hospital',
        availibility: {
          sun: '10:00 AM - 06:00 PM',
          wed: '06:00 PM - 09:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Mary Ellis',
        org: 'ABC Hospital',
        availibility: {
          sun: '10:00 AM - 06:00 PM',
          mon: '09:00 PM - 11:00 PM',
          thu: '11:00 AM - 02:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Christine Murrell',
        org: 'Bassetlaw District General Hospital',
        availibility: {
          sun: '10:00 AM - 06:00 PM',
          tue: '12:00 PM - 06:00 PM',
          thu: '10:00 AM - 02:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Liam Donaldson',
        org: 'Buxton Hospital',
        availibility: {
          sat: '10:00 AM - 02:00 PM',
          mon: '11:00 AM - 05:00 PM',
          wed: '12:00 PM - 06:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Barry Berson',
        org: 'Metropolitan Hospital Center',
        availibility: {
          sun: '11:00 AM - 03:00 PM',
          mon: '12:00 AM - 06:00 PM',
          tue: '2:00 PM - 05:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Martin R. Prince',
        org: 'Memorial Sloan Kettering Cancer Center',
        availibility: {
          sun: '11:00 AM - 03:00 PM',
          mon: '12:00 AM - 06:00 PM',
          tue: '2:00 PM - 05:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Alec J. Megibow',
        org: 'Manhattan Psychiatric Center',
        availibility: {
          mon: '12:00 AM - 06:00 PM',
          tue: '2:00 PM - 05:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. H Charles Pfaff',
        org: 'Manhattan Eye, Ear and Throat Hospital',
        availibility: {
          sun: '11:00 AM - 03:00 PM',
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Ronald S. Adler',
        org: 'Lenox Hill Hospital',
        availibility: {
          sun: '11:00 AM - 03:00 PM',
          tue: '2:00 PM - 05:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Michael Recht',
        org: 'Hospital for Special Surgery',
        availibility: {
          sun: '12:00 AM - 06:00 PM',
          mon: '19:00 AM - 03:00 PM',
          tue: '10:00 PM - 04:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Nancy R. Fefferman',
        org: 'Harlem Hospital Center',
        availibility: {
          sat: '12:00 AM - 06:00 PM',
          thu: '19:00 AM - 03:00 PM',
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Nicole Hindman',
        org: 'Gracie Square Hospital',
        availibility: {
          wed: '11:00 AM - 03:00 PM',
          mon: '12:00 AM - 06:00 PM',
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Elizabeth A. Morris',
        org: 'Coler-Goldwater Specialty Hospital',
        availibility: {
          sat: '11:00 AM - 03:00 PM',
          thu: '19:00 AM - 03:00 PM',
          wed: '2:00 PM - 05:00 PM'
        },
        visitDurationInMin: 15
      },
      {
        name: 'Dr. Miriam Levy',
        org: 'Bellevue Hospital Center',
        availibility: {
          sun: '11:00 AM - 03:00 PM',
          mon: '12:00 AM - 06:00 PM',
        },
        visitDurationInMin: 15
      }
    ];
    return {doctors};
  }
}
