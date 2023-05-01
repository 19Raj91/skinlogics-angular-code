import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenTestimonialComponent } from './written-testimonial.component';

describe('WrittenTestimonialComponent', () => {
  let component: WrittenTestimonialComponent;
  let fixture: ComponentFixture<WrittenTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittenTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
