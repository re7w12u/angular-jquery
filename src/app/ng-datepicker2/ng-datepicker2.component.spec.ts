/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgDatepicker2Component } from './ng-datepicker2.component';

describe('NgDatepicker2Component', () => {
  let component: NgDatepicker2Component;
  let fixture: ComponentFixture<NgDatepicker2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatepicker2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatepicker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
