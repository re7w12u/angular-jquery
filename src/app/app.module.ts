import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgDatepickerComponent } from './ng-datepicker/ng-datepicker.component';
import { NgDatepicker2Component } from './ng-datepicker2/ng-datepicker2.component';
import { NgDragmeComponent } from './ng-dragme/ng-dragme.component';

import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NgDatepickerComponent,
    NgDatepicker2Component,
    NgDragmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
