import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-action',
  templateUrl: './employee-action.component.html',
  styleUrls: ['./employee-action.component.scss']
})
export class EmployeeActionComponent implements OnInit {

  form: FormGroup

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
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      birthDate: [null, Validators.required],
      basicSalary: [null, Validators.required],
      status: [null, Validators.required],
      group: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

}
