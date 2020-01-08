import { TestBed } from '@angular/core/testing';

import { MarvelServiceService } from './marvel-service.service';

describe('MarvelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelServiceService = TestBed.get(MarvelServiceService);
    expect(service).toBeTruthy();
  });
});
