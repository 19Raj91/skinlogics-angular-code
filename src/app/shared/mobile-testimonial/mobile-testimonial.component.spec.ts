import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTestimonialComponent } from './mobile-testimonial.component';

describe('MobileTestimonialComponent', () => {
  let component: MobileTestimonialComponent;
  let fixture: ComponentFixture<MobileTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
