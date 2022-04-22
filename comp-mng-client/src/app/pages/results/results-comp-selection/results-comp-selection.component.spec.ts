import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCompSelectionComponent } from './results-comp-selection.component';

describe('ResultsCompSelectionComponent', () => {
  let component: ResultsCompSelectionComponent;
  let fixture: ComponentFixture<ResultsCompSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsCompSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsCompSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
