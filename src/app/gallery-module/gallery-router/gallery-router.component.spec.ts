import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRouterComponent } from './gallery-router.component';

describe('GalleryRouterComponent', () => {
  let component: GalleryRouterComponent;
  let fixture: ComponentFixture<GalleryRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
