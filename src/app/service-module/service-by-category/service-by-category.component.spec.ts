import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceByCategoryComponent } from './service-by-category.component';

describe('ServiceByCategoryComponent', () => {
  let component: ServiceByCategoryComponent;
  let fixture: ComponentFixture<ServiceByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
