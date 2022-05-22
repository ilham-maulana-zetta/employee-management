import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this.router.navigate(['./login']);
    localStorage.setItem('auth', 'no')
    this.snackbar.open('Anda telah berhasil keluar', 'Tutup', {duration: 5000})
  }

}
