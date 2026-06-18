import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';
import { PokemonItem } from '../pokemon-item.model';
import { ItemCard } from '../item-card/item-card';


@Component({
  selector: 'app-poke-ball',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './poke-ball.html',
  styleUrl: './poke-ball.css',
})
export class PokeBall {
   martService = inject(MartService);
   cartService = inject(CartService);

  filtered = computed(() => 
    this.martService.items().filter(i => i.category === 'Poke Ball')
  );

  onAddItem(item: PokemonItem) {
    this.cartService.addToCart(item);
  }
}
