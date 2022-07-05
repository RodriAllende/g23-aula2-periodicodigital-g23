/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AntoCVComponent } from './AntoCV.component';

describe('AntoCVComponent', () => {
  let component: AntoCVComponent;
  let fixture: ComponentFixture<AntoCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
