import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinDoctorComponent } from './skin-doctor.component';

describe('SkinDoctorComponent', () => {
  let component: SkinDoctorComponent;
  let fixture: ComponentFixture<SkinDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
