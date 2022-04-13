import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionParticipateComponent } from './competition-participate.component';

describe('CompetitionParticipateComponent', () => {
  let component: CompetitionParticipateComponent;
  let fixture: ComponentFixture<CompetitionParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionParticipateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
