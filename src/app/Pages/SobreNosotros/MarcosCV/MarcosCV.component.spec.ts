/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarcosCVComponent } from './MarcosCV.component';

describe('MarcosCVComponent', () => {
  let component: MarcosCVComponent;
  let fixture: ComponentFixture<MarcosCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcosCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcosCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
