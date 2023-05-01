import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestacallbackformComponent } from './requestacallbackform.component';

describe('RequestacallbackformComponent', () => {
  let component: RequestacallbackformComponent;
  let fixture: ComponentFixture<RequestacallbackformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestacallbackformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestacallbackformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
