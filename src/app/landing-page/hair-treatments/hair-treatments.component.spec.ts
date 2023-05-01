import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairTreatmentsComponent } from './hair-treatments.component';

describe('HairTreatmentsComponent', () => {
  let component: HairTreatmentsComponent;
  let fixture: ComponentFixture<HairTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairTreatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
