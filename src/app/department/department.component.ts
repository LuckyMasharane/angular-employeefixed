import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  department =[
    {depName:"IT"},
    {depName:"HR"},
    {depName:"Marketing"},
    {depName:"Sales"},
    {depName:"Printing"},
    {depName:"Engineering"}
  ]
}