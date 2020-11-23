import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ContactFieldComponent } from './components/contact-field/contact-field.component';
import { SocialFieldComponent } from './components/social-field/social-field.component';
import { RightFieldComponent } from './components/right-field/right-field.component';
import { MaterialModule } from './core/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    ContactFieldComponent,
    SocialFieldComponent,
    RightFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
