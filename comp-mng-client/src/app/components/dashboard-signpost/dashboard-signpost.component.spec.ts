import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSignpostComponent } from './dashboard-signpost.component';

describe('DashboardSignpostComponent', () => {
  let component: DashboardSignpostComponent;
  let fixture: ComponentFixture<DashboardSignpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSignpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSignpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
