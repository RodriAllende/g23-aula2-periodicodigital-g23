/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaxiCVComponent } from './MaxiCV.component';

describe('MaxiCVComponent', () => {
  let component: MaxiCVComponent;
  let fixture: ComponentFixture<MaxiCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxiCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxiCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
