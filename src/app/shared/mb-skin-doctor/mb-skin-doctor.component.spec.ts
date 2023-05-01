import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbSkinDoctorComponent } from './mb-skin-doctor.component';

describe('MbSkinDoctorComponent', () => {
  let component: MbSkinDoctorComponent;
  let fixture: ComponentFixture<MbSkinDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbSkinDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbSkinDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
