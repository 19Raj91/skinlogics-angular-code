import { TestBed } from '@angular/core/testing';

import { LaningpageService } from './laningpage.service';

describe('LaningpageService', () => {
  let service: LaningpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaningpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
