import { TestBed } from '@angular/core/testing';

import { FetchmoviesService } from './fetchmovies.service';

describe('FetchmoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchmoviesService = TestBed.get(FetchmoviesService);
    expect(service).toBeTruthy();
  });
});
