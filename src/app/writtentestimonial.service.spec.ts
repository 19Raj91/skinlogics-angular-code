import { TestBed } from '@angular/core/testing';

import { WrittentestimonialService } from './writtentestimonial.service';

describe('WrittentestimonialService', () => {
  let service: WrittentestimonialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrittentestimonialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
