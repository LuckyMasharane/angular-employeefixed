import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeesService } from '../employees.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
   message: string = "Employee Details"
    public contactForm: FormGroup;

  constructor( private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) private data: any,
   private dialogRef: MatDialogRef<UpdateDialogComponent>,
   private _employeeService: EmployeesService 
   ) {
 console.log(this.data);
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
   
  ngOnInit() {
   this.contactForm = this._formBuilder.group({
     ID: [this.data.Id],
      empName: [ this.data.empName, [Validators.required]],
      empSurname: [ this.data.empSurname, [Validators.required]],
      empPosition: [ this.data.empPosition, [Validators.required]],
      empAge: [ this.data.empAge, [Validators.required]],
    });
  }
 onSubmit() {
     console.log(this.contactForm.value.ID);
     this._employeeService.updateEmployee(this.contactForm.value);
   this.dialogRef.close();
 }
}