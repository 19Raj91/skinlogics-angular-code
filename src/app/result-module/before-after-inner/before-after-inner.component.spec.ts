import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfterInnerComponent } from './before-after-inner.component';

describe('BeforeAfterInnerComponent', () => {
  let component: BeforeAfterInnerComponent;
  let fixture: ComponentFixture<BeforeAfterInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeAfterInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeAfterInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
