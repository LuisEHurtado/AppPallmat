import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersListPage } from './transfers-list.page';

describe('TransfersListPage', () => {
  let component: TransfersListPage;
  let fixture: ComponentFixture<TransfersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfersListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
