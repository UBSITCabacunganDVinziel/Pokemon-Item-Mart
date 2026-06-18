import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartItem } from '../mart.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  item = input.required<MartItem>();
  purchase = output<MartItem>();

  onPurchaseClick() {
    this.purchase.emit(this.item());
  }
}
