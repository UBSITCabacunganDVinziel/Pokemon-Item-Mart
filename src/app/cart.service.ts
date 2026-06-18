import { Injectable, signal, computed } from '@angular/core';
import { CartItem, MartItem } from './mart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartState = signal<CartItem[]>([]);

  readonly cart = this.cartState.asReadonly();

  readonly cartTotal = computed(() => 
    this.cartState().reduce((sum, current) => sum + (current.item.price * current.quantity), 0)
  );

  readonly cartCount = computed(() => 
    this.cartState().reduce((count, current) => count + current.quantity, 0)
  );

  addToCart(item: MartItem) {
    this.cartState.update(currentCart => {
      const index = currentCart.findIndex(c => c.item.id === item.id);
      if (index > -1) {
        const updated = [...currentCart];
        updated[index] = { ...updated[index], quantity: updated[index].quantity + 1 };
        return updated;
      }
      return [...currentCart, { item, quantity: 1 }];
    });
  }

  removeFromCart(itemId: number) {
    this.cartState.update(currentCart => currentCart.filter(c => c.item.id !== itemId));
  }

  clearCart() {
    this.cartState.set([]);
  }
}