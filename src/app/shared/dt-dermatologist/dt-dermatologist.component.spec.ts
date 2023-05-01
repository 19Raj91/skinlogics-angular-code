import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtDermatologistComponent } from './dt-dermatologist.component';

describe('DtDermatologistComponent', () => {
  let component: DtDermatologistComponent;
  let fixture: ComponentFixture<DtDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtDermatologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
