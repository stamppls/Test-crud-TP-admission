import { Component, OnInit } from '@angular/core';
import { AdmissionComponent } from '../admission/admission.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  student = {
    fullname: " ",
    pid: " ",
    status: "pass"
  };
  constructor(public dialogRef: MatDialogRef<AdmissionComponent>) { }
  
  closeonclick() {
    this.dialogRef.close(this.student);
    console.log("closeonclick");
  }
  close(){
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
