/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgDatepicker3Component } from './ng-datepicker3.component';

describe('NgDatepicker3Component', () => {
  let component: NgDatepicker3Component;
  let fixture: ComponentFixture<NgDatepicker3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatepicker3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatepicker3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
