import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTabComponent } from './sports-tab.component';

describe('SportsTabComponent', () => {
  let component: SportsTabComponent;
  let fixture: ComponentFixture<SportsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
