import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  cartService = inject(CartService);

  onCheckout(){
    alert(`Transaction Complete! Staged payment processed. Total: ${this.cartService.cartTotal()} ₽`);
    this.cartService.clearCart();
  }
}

