import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTeamsComponent } from './manual-teams.component';

describe('ManualTeamsComponent', () => {
  let component: ManualTeamsComponent;
  let fixture: ComponentFixture<ManualTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
