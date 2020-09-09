import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { Routes, RouterModule } from '@angular/router';

const appRouting: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent }
  ];



@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRouting)
  ],
  declarations: [],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }