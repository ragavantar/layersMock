import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePage } from './mobile.page';

describe('MobilePage', () => {
  let component: MobilePage;
  let fixture: ComponentFixture<MobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
