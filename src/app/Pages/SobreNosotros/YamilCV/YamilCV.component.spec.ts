/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YamilCVComponent } from './YamilCV.component';

describe('YamilCVComponent', () => {
  let component: YamilCVComponent;
  let fixture: ComponentFixture<YamilCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamilCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamilCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
