import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';
import { PokemonItem } from '../pokemon-item.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-healing-item',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './healing-item.html',
  styleUrl: './healing-item.css',
})
export class HealingItem {
   martService = inject(MartService);
   cartService = inject(CartService);

  filtered = computed(() => 
    this.martService.items().filter(i => i.category === 'Healing Item')
  );

  onAddItem(item: PokemonItem) {
    this.cartService.addToCart(item);
  }
}
