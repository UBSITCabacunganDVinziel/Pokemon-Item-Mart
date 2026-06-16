import { Injectable, signal } from '@angular/core';
import { PokemonItem } from './pokemon-item.model';

@Injectable({
  providedIn: 'root'
})
export class MartService {
  private martItems = signal<PokemonItem[]>([
    { id: 1, name: 'Potion', price: 300, description: 'Heals 20 HP', icon: '🧪' },
    { id: 2, name: 'Super Potion', price: 700, description: 'Heals 60 HP', icon: '🧪' },
    { id: 3, name: 'Hyper Potion', price: 1200, description: 'Heals 120 HP', icon: '🧪' },
    { id: 4, name: 'Poké Ball', price: 200, description: 'Device for catching wild Pokémon',category: '', icon: '🔴' },
    { id: 5, name: 'Great Ball', price: 600, description: 'High-performance Poké Ball', icon: '🔵' },
    { id: 6, name: 'Ultra Ball', price: 800, description: 'Ultra-performance Poké Ball', icon: '🟡' },
    { id: 7, name: 'Revive', price: 1500, description: 'Revives a fainted Pokémon with half HP', icon: '✨' },
    { id: 8, name: 'Antidote', price: 100, description: 'Cures poisoning status items', icon: '🟢' },
    { id: 9, name: 'Full Heal', price: 600, description: 'Heals all status conditions', icon: '💊' },
    { id: 10, name: 'Escape Rope', price: 550, description: 'Used to escape instantly from caves', icon: '🪢' }
  ]);

  readonly items = this.martItems.asReadonly();
}