import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTooltipComponent } from './rating-tooltip.component';

describe('RatingTooltipComponent', () => {
  let component: RatingTooltipComponent;
  let fixture: ComponentFixture<RatingTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingTooltipComponent]
    });
    fixture = TestBed.createComponent(RatingTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
