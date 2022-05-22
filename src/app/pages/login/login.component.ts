import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('auth') === 'yes') {
      this.router.navigate(['./employee']);
    } else {
      this.initForm()
    }
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  login() {
    if (this.loginForm.get('email')?.value === 'mail@gmail.com' && this.loginForm.get('password')?.value === '123456') {
      localStorage.setItem('auth', 'yes');
      this.router.navigate(['./employee'])
    } else {
      this.snackbar.open('Email/Password yang dimasukkan salah', 'Tutup', {duration: 5000})
    }
  }

}
