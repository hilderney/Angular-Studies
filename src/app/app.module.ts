import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ResultFieldComponent } from './components/result-field/result-field.component';
import { ContactFieldComponent } from './components/contact-field/contact-field.component';
import { SocialFieldComponent } from './components/social-field/social-field.component';
import { RightFieldComponent } from './components/right-field/right-field.component';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    ResultFieldComponent,
    ContactFieldComponent,
    SocialFieldComponent,
    RightFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
