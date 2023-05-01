import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInnerComponent } from './service-inner.component';

describe('ServiceInnerComponent', () => {
  let component: ServiceInnerComponent;
  let fixture: ComponentFixture<ServiceInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
