import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrInterviewAssessementComponent } from './hr-interview-assessement.component';

describe('HrInterviewAssessementComponent', () => {
  let component: HrInterviewAssessementComponent;
  let fixture: ComponentFixture<HrInterviewAssessementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrInterviewAssessementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrInterviewAssessementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
