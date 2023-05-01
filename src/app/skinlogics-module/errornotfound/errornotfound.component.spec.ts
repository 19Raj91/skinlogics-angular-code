import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrornotfoundComponent } from './errornotfound.component';

describe('ErrornotfoundComponent', () => {
  let component: ErrornotfoundComponent;
  let fixture: ComponentFixture<ErrornotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrornotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrornotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
