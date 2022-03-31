import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksAdminComponent } from './feedbacks-admin.component';

describe('FeedbacksAdminComponent', () => {
  let component: FeedbacksAdminComponent;
  let fixture: ComponentFixture<FeedbacksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacksAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
