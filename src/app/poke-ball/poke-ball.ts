import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';


@Component({
  selector: 'app-poke-ball',
  standalone: true,
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
