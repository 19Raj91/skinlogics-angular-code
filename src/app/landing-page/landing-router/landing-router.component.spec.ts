import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRouterComponent } from './landing-router.component';

describe('LandingRouterComponent', () => {
  let component: LandingRouterComponent;
  let fixture: ComponentFixture<LandingRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
