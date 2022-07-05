/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KevinCVComponent } from './KevinCV.component';

describe('KevinCVComponent', () => {
  let component: KevinCVComponent;
  let fixture: ComponentFixture<KevinCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KevinCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KevinCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
