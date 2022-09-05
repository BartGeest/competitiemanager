import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompetitionOverview } from './single-competition-overview.component';

describe('CompetitionParticipateComponent', () => {
  let component: SingleCompetitionOverview;
  let fixture: ComponentFixture<SingleCompetitionOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCompetitionOverview ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompetitionOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
