import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from './pokemon-item.model';
import { PokemonItem } from './pokemon-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartState = signal<CartItem[]>([]);

  readonly cart = this.cartState.asReadonly();

  readonly cartCount = computed(() => 
    this.cartState().reduce((total, currentItem) => total + currentItem.quantity, 0)
  );

  readonly cartTotal = computed(() => 
    this.cartState().reduce((totalPrice, currentItem) => totalPrice + (currentItem.item.price * currentItem.quantity), 0)
  );

  addToCart(item: PokemonItem) {
    this.cartState.update(currentCart => {
      const existingItemIndex = currentCart.findIndex(cartItem => cartItem.item.id === item.id);

      if (existingItemIndex > -1) {

        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        return updatedCart;
      }

      return [...currentCart, { item, quantity: 1 }];
    });
  }

  removeFromCart(itemId: number) {
    this.cartState.update(currentCart => 
      currentCart.filter(cartItem => cartItem.item.id !== itemId)
    );
  }

  clearCart() {
    this.cartState.set([]);
  }
}