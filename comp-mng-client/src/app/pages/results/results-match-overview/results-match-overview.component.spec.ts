import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMatchOverviewComponent } from './results-match-overview.component';

describe('ResultsMatchOverviewComponent', () => {
  let component: ResultsMatchOverviewComponent;
  let fixture: ComponentFixture<ResultsMatchOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsMatchOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMatchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
