import { Component } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';
import { PokemonItem } from '../pokemon-item.model';

@Component({
  selector: 'app-poke-ball',
  imports: [],
  templateUrl: './poke-ball.html',
  styleUrl: './poke-ball.css',
})
export class PokeBall {
  private martService = inject(MartService);
  private cartService = inject(CartService);

  filteredItems = computed(() => 
    this.martService.items().filter(i => i.category === 'Poke Ball')
  );

  onAddItem(item: MartItem) {
    this.cartService.addToCart(item);
  }
}
