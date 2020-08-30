import {Doctor} from './doctor.model';

export const DoctorList: Doctor[] = [
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
  }
];
