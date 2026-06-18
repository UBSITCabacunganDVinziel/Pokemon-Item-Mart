import { Component,inject,computed } from '@angular/core';
import { CartService } from '../cart.service';
import { MartService } from '../mart.service';
import { MartItem } from '../mart.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-status-healing',
  standalone: true,
  imports: [ItemCard],
  templateUrl: './status-healing.html'
})
export class StatusHealing {
  private martService = inject(MartService);
  private cartService = inject(CartService);

  filteredItems = computed(() => 
    this.martService.items().filter(i => i.category === 'Status Healing')
  );

  onAddItem(item: MartItem) {
    this.cartService.addToCart(item);
  }
}

