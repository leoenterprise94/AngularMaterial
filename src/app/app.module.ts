import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailsComponent } from './emails/emails.component';
import { EmailComponent } from './emails/email/email.component';
import { MaterialModule } from './material/material.module';
import { EmailService } from './shared/email.service';
import { environment } from '../environments/environment';
import { EmailListComponent } from './emails/email-list/email-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsComponent,
    EmailComponent,
    EmailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent], 
  entryComponents: [EmailComponent]
})
export class AppModule { }
