import { TestBed } from '@angular/core/testing';

import { PainService } from './pain.service';

describe('PainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PainService = TestBed.get(PainService);
    expect(service).toBeTruthy();
  });
});
