
import { Component, OnInit,ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-ng-datepicker',
  templateUrl: './ng-datepicker.component.html',
  styleUrls: ['./ng-datepicker.component.css']
})
export class NgDatepickerComponent implements OnInit, AfterViewInit {
 @ViewChild('datetimepicker1') el:ElementRef;
 @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();
 date:Date;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#datetimepicker1").datetimepicker();
  }

  SaveDate($event){
    console.log("got a date !!");
  }


}
