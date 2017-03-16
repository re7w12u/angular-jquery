import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  myfeed :string = "I am your father!";
  childResponse:boolean;
  constructor() { }

  ngOnInit() {
  }

  handleResponse($event: boolean){
    console.log($event);    
    this.childResponse = $event;
  }

}
