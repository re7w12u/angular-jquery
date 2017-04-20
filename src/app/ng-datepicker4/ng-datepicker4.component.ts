import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-ng-datepicker4',
  templateUrl: './ng-datepicker4.component.html',
  styleUrls: ['./ng-datepicker4.component.css']
})
export class NgDatepicker4Component implements OnInit, AfterViewInit  {

  //private _date:Date;
  @Input() date:Date;
  @ViewChild('inputdate') input: ElementRef;  
  @Output() dateChange:EventEmitter<Date> = new EventEmitter<Date>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(this.input.nativeElement).datepicker({onSelect:(d)=> {
      console.log(d);
      this.date = new Date(d);
      this.dateChange.emit(this.date);
    }});
  }
}
