import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VandanamalikComponent } from './vandanamalik.component';

describe('VandanamalikComponent', () => {
  let component: VandanamalikComponent;
  let fixture: ComponentFixture<VandanamalikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VandanamalikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VandanamalikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
