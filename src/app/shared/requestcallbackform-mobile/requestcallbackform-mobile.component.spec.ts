import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcallbackformMobileComponent } from './requestcallbackform-mobile.component';

describe('RequestcallbackformMobileComponent', () => {
  let component: RequestcallbackformMobileComponent;
  let fixture: ComponentFixture<RequestcallbackformMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestcallbackformMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestcallbackformMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
