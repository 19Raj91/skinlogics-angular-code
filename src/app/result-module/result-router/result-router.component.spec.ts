import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRouterComponent } from './result-router.component';

describe('ResultRouterComponent', () => {
  let component: ResultRouterComponent;
  let fixture: ComponentFixture<ResultRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
