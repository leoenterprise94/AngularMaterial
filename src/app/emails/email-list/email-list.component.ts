import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailService } from 'src/app/shared/email.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  constructor(private service: EmailService, private dialog : MatDialog ) { }

  
  listData: MatTableDataSource<any>;
  displayedColumns : string[] = ['destinatary','description','content','actions']
  
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  searchkey: string;

  ngOnInit() {
    this.service.getEmails().subscribe(
      list => {
          let array = list.map(item=>{
            return{
              $id : item.key,
               ...item.payload.val()
            };
          });
          this.listData = new MatTableDataSource(array);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
          

    });
  }

  onSearchClear(){
    this.searchkey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchkey.trim().toLowerCase();
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
this.dialog.open(EmailComponent,dialogConfig);
  }
}
