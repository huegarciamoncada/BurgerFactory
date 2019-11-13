import { TestBed } from '@angular/core/testing';

import { FromageService } from './fromage.service';

describe('FromageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FromageService = TestBed.get(FromageService);
    expect(service).toBeTruthy();
  });
});
