import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRouterComponent } from './shared-router.component';

describe('SharedRouterComponent', () => {
  let component: SharedRouterComponent;
  let fixture: ComponentFixture<SharedRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
