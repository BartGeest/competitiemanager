import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualGeneralComponent } from './manual-general.component';

describe('ManualGeneralComponent', () => {
  let component: ManualGeneralComponent;
  let fixture: ComponentFixture<ManualGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
