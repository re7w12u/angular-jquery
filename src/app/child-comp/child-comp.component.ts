import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() feedin:string;
  @Output() onReponse:EventEmitter<boolean> = new EventEmitter<boolean>();
  agree: boolean;
  constructor() { }

  ngOnInit() {
    console.log("feedin" + this.feedin);    
  }

  response(agreed: boolean){
    console.log("responding..." + agreed);
    this.onReponse.emit(agreed);
    this.agree = agreed;
  }

}
