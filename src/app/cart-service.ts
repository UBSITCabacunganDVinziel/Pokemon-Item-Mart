import { Injectable, signal, computed } from '@angular/core';
import { CartItem, PokemonItem } from './pokemoninfo.model';

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

  addToCart(item: PokemonItem) {
    this.cartState.update(currentCart => {
      const existingIdx = currentCart.findIndex(c => c.item.id === item.id);
      if (existingIdx > -1) {
        const updatedCart = [...currentCart];
        updatedCart[existingIdx] = {
          ...updatedCart[existingIdx],
          quantity: updatedCart[existingIdx].quantity + 1
        };
        return updatedCart;
      }
      return [...currentCart, { item, quantity: 1 }];
    });
  }

  removeFromCart(itemId: number) {
    this.cartState.update(currentCart => 
      currentCart.filter(c => c.item.id !== itemId)
    );
  }
}