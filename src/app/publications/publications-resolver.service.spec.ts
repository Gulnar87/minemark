import { TestBed } from '@angular/core/testing';

import { WorkResolverService } from './work-resolver.service';

describe('WorkResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkResolverService = TestBed.get(WorkResolverService);
    expect(service).toBeTruthy();
  });
});
