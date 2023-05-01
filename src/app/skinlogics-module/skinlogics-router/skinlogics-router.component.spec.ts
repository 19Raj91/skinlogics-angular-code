import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinlogicsRouterComponent } from './skinlogics-router.component';

describe('SkinlogicsRouterComponent', () => {
  let component: SkinlogicsRouterComponent;
  let fixture: ComponentFixture<SkinlogicsRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinlogicsRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinlogicsRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
