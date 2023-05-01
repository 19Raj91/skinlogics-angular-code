import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtwhyChooseComponent } from './dtwhy-choose.component';

describe('DtwhyChooseComponent', () => {
  let component: DtwhyChooseComponent;
  let fixture: ComponentFixture<DtwhyChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtwhyChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtwhyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
