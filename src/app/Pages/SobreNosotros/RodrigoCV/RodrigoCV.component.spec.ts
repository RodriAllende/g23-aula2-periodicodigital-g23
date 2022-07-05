/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RodrigoCVComponent } from './RodrigoCV.component';

describe('RodrigoCVComponent', () => {
  let component: RodrigoCVComponent;
  let fixture: ComponentFixture<RodrigoCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodrigoCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodrigoCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
