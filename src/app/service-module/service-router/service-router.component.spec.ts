import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRouterComponent } from './service-router.component';

describe('ServiceRouterComponent', () => {
  let component: ServiceRouterComponent;
  let fixture: ComponentFixture<ServiceRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
