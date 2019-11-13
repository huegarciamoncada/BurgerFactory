import { TestBed } from '@angular/core/testing';

import { ViandeService } from './viande.service';

describe('ViandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViandeService = TestBed.get(ViandeService);
    expect(service).toBeTruthy();
  });
});
