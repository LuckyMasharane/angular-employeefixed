import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
//   constructor(public dialog: MatDialog){

//  }

  
  // openDialog(empName) {
  //   const dialogRef = this.dialog.open(DialogComponent,{
  //     data:{
  //       message: 'Are you sure want to delete?',
  //       buttonText: {
  //         ok: 'Delete',
  //         cancel: 'No'
  //       }
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
  //     if (confirmed) {
  //       const index = this.employees.indexOf(empName,0)
  //       if (index >-1) {
  //         this.employees.splice(index,1);
  //       }
  //     }
  //   });
  // }


}
