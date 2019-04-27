import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../shared/email.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private service: EmailService,
    public dialogRef : MatDialogRef<EmailComponent>) { }

  ngOnInit() {
    this.service.getEmails();
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.insertEmail(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose(){
this.service.form.reset();
this.service.initializeFormGroup();
this.dialogRef.close();
  }

}
