import { TestBed } from '@angular/core/testing';

import { InteroperabilityService } from './interoperability.service';

describe('InteroperabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteroperabilityService = TestBed.get(InteroperabilityService);
    expect(service).toBeTruthy();
  });
});
