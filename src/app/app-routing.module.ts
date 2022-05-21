import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
