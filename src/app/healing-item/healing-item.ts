import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';
import { PokemonItem } from '../pokemon-item.model';


@Component({
  selector: 'app-healing-item',
  standalone: true,
  imports: [],
  templateUrl: './healing-item.html',
  styleUrl: './healing-item.css',
})
export class HealingItem {
  private martService = inject(MartService);
  private cartService = inject(CartService);

  filteredItems = computed(() => 
    this.martService.items().filter(i => i.category === 'Healing item')
  );

  onAddItem(item: PokemonItem) {
    this.cartService.addToCart(item);
  }
}
