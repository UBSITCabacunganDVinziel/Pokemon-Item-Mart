import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';
import { PokemonItem } from '../pokemon-item.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-escape-item',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './escape-item.html',
  styleUrl: './escape-item.css',
})
export class EscapeItem {
   martService = inject(MartService);
   cartService = inject(CartService);

  filtered = computed(() => 
    this.martService.items().filter(i => i.category === 'Escape Item')
  );

  onAddItem(item: PokemonItem) {
    this.cartService.addToCart(item);
  }
}
