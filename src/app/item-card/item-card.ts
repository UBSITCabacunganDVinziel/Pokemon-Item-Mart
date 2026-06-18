import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItem } from '../pokemon-item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  item = input.required<PokemonItem>();
  purchase = output<PokemonItem>();

  onPurchaseClick() {
    this.purchase.emit(this.item());
  }
}
