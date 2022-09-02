import { TestBed } from '@angular/core/testing';

import { TeamOverviewResolver } from './team.overview.resolver';

describe('Team.OverviewResolver', () => {
  let resolver: TeamOverviewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TeamOverviewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
