import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  login() {
    if (this.loginForm.get('email')?.value === 'ilhambalcazar14@gmail.com' && this.loginForm.get('password')?.value === '123456') {
      this.router.navigate(['./employee'])
    }
  }

}
