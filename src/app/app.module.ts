import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';
import { DialogComponent } from './dialog/dialog.component';
import { DepartmentComponent } from './department/department.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { EmployeesService } from './employees.service';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatButtonModule,  MatGridListModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeComponent, DialogComponent, DepartmentComponent, ProjectsComponent, WelcomePageComponent, UpdateDialogComponent, AddEmployeeComponent ],
  entryComponents:[ DialogComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [EmployeesService]

})
export class AppModule { }
