import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects = [
    {projectName:"Smart security App",projectDetails:"IOT systems", Department:"IT"},
    {projectName:"Payment and Hiring",projectDetails:"Payment and hiring", Department:"HR"},
    {projectName:"Marketing",projectDetails:"Pointing to the right people", Department:"Marketing"},
    {projectName:"Asembling",projectDetails:"soldering component", Department:"Engineering"},
    {projectName:"advertising",projectDetails:"selling the product", Department:"Sales"},
    {projectName:"Web app",projectDetails:"", Department:"Software dev"},
    {projectName:"advertising",projectDetails:"flyers", Department:"Priting"}
  ]
}