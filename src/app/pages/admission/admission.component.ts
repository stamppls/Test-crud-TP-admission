import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {
  students = [];

  constructor(private http: HttpClient,public dialog: MatDialog) { }
  ngOnInit() {
    console.log("loggetData");
    this.getData()
  }
  saveData(data: any){
    this.http.post("http://localhost:3000/api/admissions",data).subscribe((res: any) => {
      this.students = res.data;
      console.log("saveData");
      console.log(res);
      this.getData();
  })
}
  getData() {
   this.http.get("http://localhost:3000/api/admissions").subscribe((res: any) => {
    this.students = res.data;
    console.log("getData");
   })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog" + result);
      this.saveData(result);
    });
  }
}

