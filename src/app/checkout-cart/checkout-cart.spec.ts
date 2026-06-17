import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCart } from './checkout-cart';

describe('CheckoutCart', () => {
  let component: CheckoutCart;
  let fixture: ComponentFixture<CheckoutCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutCart],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
