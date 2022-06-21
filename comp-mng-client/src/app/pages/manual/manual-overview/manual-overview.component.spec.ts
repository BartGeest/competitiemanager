import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualOverviewComponent } from './manual-overview.component';

describe('ManualOverviewComponent', () => {
  let component: ManualOverviewComponent;
  let fixture: ComponentFixture<ManualOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
