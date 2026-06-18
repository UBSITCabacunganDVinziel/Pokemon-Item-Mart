import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';
import { PokemonItem } from '../pokemon-item.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-status-healing',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './status-healing.html',
  styleUrl: './status-healing.css',
})
export class StatusHealing {
   martService = inject(MartService);
   cartService = inject(CartService);

  filtered = computed(() => 
    this.martService.items().filter(i => i.category === 'Status Healing')
  );

  onAddItem(item: PokemonItem) {
    this.cartService.addToCart(item);
  }
}
