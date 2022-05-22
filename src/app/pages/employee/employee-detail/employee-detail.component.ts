import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/service/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee

  constructor(
    private service: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('auth') !== 'yes') {
      this.router.navigate(['./login']);
      this.snackbar.open('Anda harus login terlebih dahulu', 'Tutup', {duration: 5000})
    }
    this.getData()
  }

  getData() {
    this.service.getDataById(this.activatedRoute.snapshot.queryParams['id']).subscribe((result: any) => {
      this.employee = result
    })
  }

  backToList() {
    this.router.navigate(['employee'], {
      state: {
        search: history.state.search
      }
    })
  }

}
