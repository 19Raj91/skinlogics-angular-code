import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinBrighteningComponent } from './skin-brightening.component';

describe('SkinBrighteningComponent', () => {
  let component: SkinBrighteningComponent;
  let fixture: ComponentFixture<SkinBrighteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinBrighteningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinBrighteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
