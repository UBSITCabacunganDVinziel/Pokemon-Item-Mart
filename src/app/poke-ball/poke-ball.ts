import { Component,inject,computed } from '@angular/core';
import { CartService } from '../cart.service';
import { MartService } from '../mart.service';
import { MartItem } from '../mart.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-poke-ball',
  standalone: true,
  imports: [ItemCard],
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

