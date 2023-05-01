import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojamoliaComponent } from './poojamolia.component';

describe('PoojamoliaComponent', () => {
  let component: PoojamoliaComponent;
  let fixture: ComponentFixture<PoojamoliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojamoliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojamoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
