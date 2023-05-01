import { TestBed } from '@angular/core/testing';

import { BlogByUrlService } from './blog-by-url.service';

describe('BlogByUrlService', () => {
  let service: BlogByUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogByUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
