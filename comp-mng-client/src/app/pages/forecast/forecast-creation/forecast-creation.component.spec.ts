import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCreationComponent } from './forecast-creation.component';

describe('ForecastCreationComponent', () => {
  let component: ForecastCreationComponent;
  let fixture: ComponentFixture<ForecastCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
