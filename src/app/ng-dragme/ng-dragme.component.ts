import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-ng-dragme',
  templateUrl: './ng-dragme.component.html',
  styleUrls: ['./ng-dragme.component.css']
})
export class NgDragmeComponent implements OnInit {

  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
  }
  
  ngOnInit() {
        jQuery(this.elementRef.nativeElement).draggable({containment:'#draggableparent'});
  }

}
