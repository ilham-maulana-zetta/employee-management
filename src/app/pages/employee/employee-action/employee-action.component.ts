import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Employee } from 'src/app/service/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-action',
  templateUrl: './employee-action.component.html',
  styleUrls: ['./employee-action.component.scss']
})
export class EmployeeActionComponent implements OnInit {

  form: FormGroup
  employee: Employee
  selectedGroup: any
  todayDate = moment().format('YYYY-MM-DD')

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  groupList = [
    { value: 'corporate', key: 'Corporate Strategy' },
    { value: 'internship', key: 'Internship' },
    { value: 'operations', key: 'Operations' },
    { value: 'technology', key: 'Technology' },
    { value: 'product', key: 'Product' },
    { value: 'data', key: 'Data' },
    { value: 'finance', key: 'Finance & Accounting' },
    { value: 'people', key: 'People' },
    { value: 'care', key: 'Customer Care' },
    { value: 'marketing', key: 'Marketing' },
    { value: 'commercial', key: 'Commercial' },
    { value: 'legal', key: 'Legal & Internal Control' },
  ]

  constructor(
    private fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private service: EmployeeService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('auth') !== 'yes') {
      this.router.navigate(['./login']);
      this.snackbar.open('Anda harus login terlebih dahulu', 'Tutup', {duration: 5000})
    } else {
      this.getData()
      this.initForm()
      this.selectedGroup = this.groupList
    }
  }

  initForm() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      birthDate: [null, Validators.required],
      basicSalary: [null, Validators.required],
      status: [null, Validators.required],
      group: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  getData() {
    this.service.getDataById(this.activatedRoute.snapshot.queryParams['id']).subscribe((result) => {
      this.employee = result
      this.form.patchValue(this.employee)
    })
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this.snackbar.open('Ada form yang belum dilengkapi', 'Tutup', {duration: 5000})
    } else {
      if (this.activatedRoute.snapshot.queryParams['m'] === 'add') {
        this.service.insert(this.form.value).subscribe((result) => {
          if (result) {
            this.snackbar.open('Data berhasil ditambahkan', 'Tutup', {duration: 5000})
            this.router.navigate(['./employee'])
          }
        })      
      } 
      else {
        this.service.update(this.activatedRoute.snapshot.queryParams['id'], this.form.value).subscribe((result) => {
          if (result) {
            this.snackbar.open('Data berhasil diperbarui', 'Tutup', {duration: 5000, panelClass: "edit"})
            this.router.navigate(['./employee'])
          }
        })
      }
    }
  }

  cancel() {
    this.router.navigate(['employee'], {
      state: {
        search: history.state.search
      }
    })
  }


  searchGroup(value: any) {
    const search = value.target.value
    this.selectedGroup = this.groupList;
    this.selectedGroup = this.selectedGroup.filter((option: any) => option.key.toLowerCase().includes(search.toLowerCase()));
  }


}
