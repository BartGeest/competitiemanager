import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCreationComponent } from './trade-creation.component';

describe('TradeCreationComponent', () => {
  let component: TradeCreationComponent;
  let fixture: ComponentFixture<TradeCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
