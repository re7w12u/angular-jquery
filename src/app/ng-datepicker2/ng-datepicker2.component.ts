import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-ng-datepicker2',
  templateUrl: './ng-datepicker2.component.html',
  styleUrls: ['./ng-datepicker2.component.css']
})
export class NgDatepicker2Component implements OnInit {
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).find("#datetimepicker1").datetimepicker();
  }

}
