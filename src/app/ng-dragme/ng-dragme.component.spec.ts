/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgDragmeComponent } from './ng-dragme.component';

describe('NgDragmeComponent', () => {
  let component: NgDragmeComponent;
  let fixture: ComponentFixture<NgDragmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDragmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDragmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
