import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-ng-datepicker3',
  templateUrl: './ng-datepicker3.component.html',
  styleUrls: ['./ng-datepicker3.component.css']
})
export class NgDatepicker3Component implements OnInit, OnChanges {

 @ViewChild('datetimepicker1') el:ElementRef;
 @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();
 
 date:string = "12313132132";
 @Input()
 test:string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#datetimepicker4").datetimepicker();
  }

  SaveDate($event){
    console.log("got a date !!");
  }

   ngOnChanges(changes: SimpleChanges) {
    console.log("c: " + changes);
    
  }
}
