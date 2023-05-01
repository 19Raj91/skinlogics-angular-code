import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsRouterComponent } from './blogs-router.component';

describe('BlogsRouterComponent', () => {
  let component: BlogsRouterComponent;
  let fixture: ComponentFixture<BlogsRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
