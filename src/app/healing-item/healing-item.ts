import { Component,inject,computed } from '@angular/core';
import { CartService } from '../cart.service';
import { MartService } from '../mart.service';
import { MartItem } from '../mart.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-healing-item',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './healing-item.html'
})
export class HealingItem {
  private martService = inject(MartService);
  private cartService = inject(CartService);

  filteredItems = computed(() => 
    this.martService.items().filter(i => i.category === 'Healing item')
  );

  onAddItem(item: MartItem) {
    this.cartService.addToCart(item);
  }
}
