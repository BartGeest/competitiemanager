import { TestBed } from '@angular/core/testing';

import { CompetitionResolver } from './competition.resolver';

describe('CompetitionResolver', () => {
  let resolver: CompetitionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompetitionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
