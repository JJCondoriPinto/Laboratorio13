import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesPage } from './pages/employees.page';
import { EmployeesPageEdit } from './pages/employees-edit.page';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesPage
  },
  {
    path: 'employees/:idEmployee',
    component: EmployeesPageEdit
  },
  {
    path: '**',
    redirectTo: 'employees',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class 
AppRoutingModule { }