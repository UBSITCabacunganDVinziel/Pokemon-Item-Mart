import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-checkout-cart',
  standalone: true,
  imports: [],
  templateUrl: './checkout-cart.html',
  styleUrl: './checkout-cart.css',
})
export class CheckoutCart {
  cartService = inject(CartService);

  onCheckout() {
    alert(`Transaction Finalized! Total paid: ${this.cartService.cartTotal()} ₽. Your items have been sent to your bag container!`);
    this.cartService.clearCart();
  }
}
