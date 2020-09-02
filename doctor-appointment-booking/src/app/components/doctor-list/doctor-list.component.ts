import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {AppointmentService} from '../../shared/services/appointment.service';
import {Doctor} from '../../shared/models/doctor.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', {static: true}) row: ElementRef;

  elements: any = [];
  headElements = ['id', 'Name', 'Organization', 'Visiting Time (minutes)', 'Action'];

  searchText = '';
  previous: string;

  maxVisibleItems = 8;

  doctors: Doctor[];

  constructor(private cdRef: ChangeDetectorRef,
              private appointmentService: AppointmentService,
              private router: Router) {
    localStorage.removeItem('doctor');
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngOnInit() {
    this.getDoctors();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  getDoctors(): void {
    this.appointmentService.getDoctors()
      .subscribe(doctors => {
        this.doctors = doctors;
        // console.log(doctors);
        this.mdbTable.setDataSource(this.doctors);
        this.doctors = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      });
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.doctors = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.doctors = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();

    this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
    });
  }

  onBookingDoctor(doctor: Doctor, i) {
    localStorage.setItem('doctor', JSON.stringify(doctor));
    this.router.navigate([`book`, ++i]);
  }
}
