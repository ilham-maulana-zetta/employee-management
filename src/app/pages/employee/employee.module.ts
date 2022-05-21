import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EmployeeComponent,
        pathMatch: 'full'
      },
      {
        path: 'action',
        loadChildren: () => import('./employee-action/employee-action.module').then(m => m.EmployeeActionModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./employee-detail/employee-detail.module').then(m => m.EmployeeDetailModule)
      },
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EmployeeModule { }
