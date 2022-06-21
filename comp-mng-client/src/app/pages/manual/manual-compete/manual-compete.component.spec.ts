import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualCompeteComponent } from './manual-compete.component';

describe('ManualCompeteComponent', () => {
  let component: ManualCompeteComponent;
  let fixture: ComponentFixture<ManualCompeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualCompeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualCompeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
