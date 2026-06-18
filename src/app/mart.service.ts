import { Injectable, signal } from '@angular/core';
import { MartItem } from './mart.model';

@Injectable({
  providedIn: 'root'
})
export class MartService {
  private inventory = signal<MartItem[]>([
    // --- POKE BALLS ---
    { id: 1, name: 'Poké Ball', price: 200, description: 'A device for catching wild Pokémon.', category: 'Poke Ball', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png' },
    { id: 2, name: 'Great Ball', price: 600, description: 'A high-performance Ball with a higher catch rate.', category: 'Poke Ball', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png' },
    { id: 3, name: 'Ultra Ball', price: 800, description: 'An ultra-performance Ball with an excellent catch rate.', category: 'Poke Ball', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png' },
    { id: 4, name: 'Premier Ball', price: 200, description: 'A rare Ball made to commemorate a special event.', category: 'Poke Ball', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png' },
    
    // --- HEALING ITEMS ---
    { id: 5, name: 'Potion', price: 300, description: 'Restores a Pokémon\'s damaged HP by 20 points.', category: 'Healing item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png' },
    { id: 6, name: 'Super Potion', price: 700, description: 'Restores a Pokémon\'s damaged HP by 60 points.', category: 'Healing item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png' },
    { id: 7, name: 'Hyper Potion', price: 1200, description: 'Restores a Pokémon\'s damaged HP by 120 points.', category: 'Healing item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png' },
    { id: 8, name: 'Max Potion', price: 2500, description: 'Fully restores a Pokémon\'s damaged HP.', category: 'Healing item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png' },
    { id: 9, name: 'Full Restore', price: 3000, description: 'Fully restores HP and heals all status conditions.', category: 'Healing item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-restore.png' },
    
    // --- STATUS HEALING ---
    { id: 10, name: 'Antidote', price: 100, description: 'An injectable spray that cures a poisoned Pokémon.', category: 'Status Healing', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png' },
    { id: 11, name: 'Parlyz Heal', price: 200, description: 'An absolute spray that cures a paralyzed Pokémon.', category: 'Status Healing', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png' },
    { id: 12, name: 'Burn Heal', price: 250, description: 'A soothing spray that heals painful battle burns.', category: 'Status Healing', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png' },
    { id: 13, name: 'Awakening', price: 250, description: 'A strong stimulant that awakens a sleeping Pokémon.', category: 'Status Healing', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/awakening.png' },
    { id: 14, name: 'Ice Heal', price: 250, description: 'A warming spray that thaws out a frozen Pokémon.', category: 'Status Healing', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-heal.png' },
    { id: 15, name: 'Full Heal', price: 600, description: 'A spray that heals any single status condition.', category: 'Status Healing', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png' },
    
    // --- ESCAPE ITEMS ---
    { id: 16, name: 'Escape Rope', price: 550, description: 'A long durable rope used to escape instantly from caves.', category: 'Escape Item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/escape-rope.png' },
    { id: 17, name: 'Poké Doll', price: 1000, description: 'A cute doll used to distract wild enemies to escape safely.', category: 'Escape Item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-doll.png' },
    { id: 18, name: 'Repel', price: 350, description: 'Prevents weak wild Pokémon from appearing for 100 steps.', category: 'Escape Item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repel.png' },
    { id: 19, name: 'Super Repel', price: 500, description: 'Prevents weak wild Pokémon from appearing for 200 steps.', category: 'Escape Item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-repel.png' },
    { id: 20, name: 'Max Repel', price: 700, description: 'Prevents weak wild Pokémon from appearing for 250 steps.', category: 'Escape Item', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-repel.png' }
  ]);

  readonly items = this.inventory.asReadonly();
}
