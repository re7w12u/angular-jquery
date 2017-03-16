
import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-ng-datepicker',
  templateUrl: './ng-datepicker.component.html',
  styleUrls: ['./ng-datepicker.component.css']
})
export class NgDatepickerComponent implements OnInit, AfterViewInit {
 @ViewChild('datetimepicker1') el:ElementRef;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#datetimepicker1").datetimepicker();
  }


}
