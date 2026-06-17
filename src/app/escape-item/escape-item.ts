import { Component, inject, computed } from '@angular/core';
import { MartService } from '../pokemart-service';
import { CartService } from '../cart-service';


@Component({
  selector: 'app-escape-item',
  standalone: true,
  imports: [],
  templateUrl: './escape-item.html',
  styleUrl: './escape-item.css',
})
export class EscapeItem {
  private martService = inject(MartService);
  private cartService = inject(CartService);

  filteredItems = computed(() => 
    this.martService.items().filter(i => i.category === 'Escape Item')
  );

  onAddItem(item: MartItem) {
    this.cartService.addToCart(item);
  }
}
