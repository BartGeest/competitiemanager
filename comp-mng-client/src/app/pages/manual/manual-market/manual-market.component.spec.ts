import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualMarketComponent } from './manual-market.component';

describe('ManualMarketComponent', () => {
  let component: ManualMarketComponent;
  let fixture: ComponentFixture<ManualMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
