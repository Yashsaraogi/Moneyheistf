import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Round7Component } from './round7.component';

describe('Round7Component', () => {
  let component: Round7Component;
  let fixture: ComponentFixture<Round7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Round7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Round7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
