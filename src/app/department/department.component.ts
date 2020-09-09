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
    {depName:"IT", depId:"01",depEmpCount:10},
    {depName:"HR", depId:"01",depEmpCount:5},
    {depName:"Marketing", depId:"01",depEmpCount:15},
    {depName:"Sales", depId:"01",depEmpCount:5},
    {depName:"Printing", depId:"01",depEmpCount:5},
    {depName:"Engineering", depId:"01",depEmpCount:10}
  ]
}