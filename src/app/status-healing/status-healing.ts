import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';


@Component({
  selector: 'app-status-healing',
  standalone: true,
  imports: [],
  templateUrl: './status-healing.html',
  styleUrl: './status-healing.css',
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
