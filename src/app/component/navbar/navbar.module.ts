import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
