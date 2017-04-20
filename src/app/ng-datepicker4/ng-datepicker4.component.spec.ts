/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgDatepicker4Component } from './ng-datepicker4.component';

describe('NgDatepicker4Component', () => {
  let component: NgDatepicker4Component;
  let fixture: ComponentFixture<NgDatepicker4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatepicker4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatepicker4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
