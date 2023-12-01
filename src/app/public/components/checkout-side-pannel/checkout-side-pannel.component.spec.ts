import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSidePannelComponent } from './checkout-side-pannel.component';

describe('CheckoutSidePannelComponent', () => {
  let component: CheckoutSidePannelComponent;
  let fixture: ComponentFixture<CheckoutSidePannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutSidePannelComponent]
    });
    fixture = TestBed.createComponent(CheckoutSidePannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
