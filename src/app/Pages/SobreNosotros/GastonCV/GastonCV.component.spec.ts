/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GastonCVComponent } from './GastonCV.component';

describe('GastonCVComponent', () => {
  let component: GastonCVComponent;
  let fixture: ComponentFixture<GastonCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastonCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastonCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
