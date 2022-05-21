import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeActionComponent } from './employee-action.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeeActionComponent
  }
]

@NgModule({
  declarations: [
    EmployeeActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EmployeeActionModule { }
