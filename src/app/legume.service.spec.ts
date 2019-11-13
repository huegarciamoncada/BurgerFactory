import { TestBed } from '@angular/core/testing';

import { LegumeService } from './legume.service';

describe('LegumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegumeService = TestBed.get(LegumeService);
    expect(service).toBeTruthy();
  });
});
