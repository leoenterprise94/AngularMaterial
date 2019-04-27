import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  
  constructor(private firebase: AngularFireDatabase) { }

  emailList: AngularFireList<any>;

 form:FormGroup = new FormGroup({
    $id: new FormControl(null),
    destinatary: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    content: new FormControl('')
  });

  initializeFormGroup(){
     this.form.setValue({
     $id: null,
     destinatary: '',
     description: '',
     content: ''
     });
  }
getEmails(){
this.emailList = this.firebase.list('emails');

return this.emailList.snapshotChanges();
  }
  
  insertEmail(email){
    this.emailList.push({
      destinatary : email.destinatary,
      description : email.description,
      content : email.content
    });
  }
  updateEmail(email){
this.emailList.update(email.$id,
  {
    destinatary : email.destinatary,
    description : email.description,
    content : email.content
});
  }
  
deleteEmail($id: string){
 this.emailList.remove($id);

  }
}
