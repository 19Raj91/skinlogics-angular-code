import { ComponentFixture, TestBed } from '@angular/core/testing';


import { LhrComponent } from './lhr.component';

describe('LhrComponent', () => {
  let component: LhrComponent;
  let fixture: ComponentFixture<LhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
