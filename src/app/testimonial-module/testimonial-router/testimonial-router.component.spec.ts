import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialRouterComponent } from './testimonial-router.component';

describe('TestimonialRouterComponent', () => {
  let component: TestimonialRouterComponent;
  let fixture: ComponentFixture<TestimonialRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
