import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgDatepickerComponent } from './ng-datepicker/ng-datepicker.component';
import { NgDatepicker2Component } from './ng-datepicker2/ng-datepicker2.component';
import { NgDragmeComponent } from './ng-dragme/ng-dragme.component';

import { DatePickerModule } from 'ng2-datepicker';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { NgDatepicker3Component } from './ng-datepicker3/ng-datepicker3.component';
import { NgDatepicker4Component } from './ng-datepicker4/ng-datepicker4.component';
import { DateformatPipe } from './dateformat.pipe';

//import {} from 'n'

@NgModule({
  declarations: [
    AppComponent,
    NgDatepickerComponent,
    NgDatepicker2Component,
    NgDragmeComponent,
    ParentCompComponent,
    ChildCompComponent,
    NgDatepicker3Component,
    NgDatepicker4Component,
    DateformatPipe
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
