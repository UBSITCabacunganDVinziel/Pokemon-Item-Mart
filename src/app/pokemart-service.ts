import { Injectable, signal } from '@angular/core';
import { PokemonItem } from './pokemon-item.model';

@Injectable({
  providedIn: 'root'
})
export class MartService {
  private inventory = signal<PokemonItem[]>([
    // Poke Balls
    { id: 1, name: 'Poké Ball', price: 200, description: 'A standard item used to catch a wild Pokémon.', category: 'Poke Ball', icon: '🔴' },
    { id: 2, name: 'Great Ball', price: 600, description: 'A high-performance Poké Ball that provides a higher success rate for catching wild Pokémon than a standard Poké Ball.', category: 'Poke Ball', icon: '🔵' },
    { id: 3, name: 'Ultra Ball', price: 1200, description: 'An ultra-high-performance Poké Ball that provides a higher success rate than a Great Ball.', category: 'Poke Ball', icon: '🟡⚫' },
    { id: 4, name: 'Premier Ball', price: 300, description: 'A rare Ball made to commemorate a special event.', category: 'Poke Ball', icon: '🔴⚪✨' },
    
    // Healing Items
    { id: 5, name: 'Potion', price: 300, description: 'Restores the HP (Hit Points) of a single Pokémon by 20 points.', category: 'Healing Item', icon: '🧪' },
    { id: 6, name: 'Super Potion', price: 700, description: 'Restores the HP of a single Pokémon by 50 points.', category: 'Healing Item', icon: '🧪' },
    { id: 7, name: 'Hyper Potion', price: 1200, description: 'Restores the HP of a single Pokémon by 200 points.', category: 'Healing Item', icon: '🧪' },
    { id: 8, name: 'Max Potion', price: 2500, description: 'Fully restores the HP of a single Pokémon.', category: 'Healing Item', icon: '🧪' },
    { id: 9, name: 'Full Restore', price: 3000, description: 'Fully restores both the HP and any major status conditions of a Pokémon.', category: 'Healing Item', icon: '🧪' },
    
    // Status Healing
    { id: 10, name: 'Antidote', price: 100, description: 'Cures a Pokémon of the Poison status condition.', category: 'Status Healing', icon: '☣️' },
    { id: 11, name: 'Parlyz Heal', price: 200, description: 'Cures a Pokémon of the Paralysis status condition.', category: 'Status Healing', icon: '⚡' },
    { id: 12, name: 'Burn Heal', price: 250, description: 'Cures a Pokémon of the Burn status condition.', category: 'Status Healing', icon: '🔥' },
    { id: 13, name: 'Awakening', price: 250, description: 'Cures a Pokémon of the Sleep status condition.', category: 'Status Healing', icon: '💤' },
    { id: 14, name: 'Ice Heal', price: 250, description: 'Cures a Pokémon of the Freeze status condition.', category: 'Status Healing', icon: '🧊' },
    { id: 15, name: 'Full Heal', price: 600, description: 'Cures a Pokémon of any major status ailment.', category: 'Status Healing', icon: '🌈' },
    
    // Escape Items
    { id: 16, name: 'Escape Rope', price: 550, description: 'Used to escape instantly from a cave or dungeon and return to the last Pokémon Center visited.', category: 'Escape Item', icon: '➰' },
    { id: 17, name: 'Poké Doll', price: 1000, description: 'A cute doll used to distract wild enemies to escape safely.', category: 'Escape Item', icon: '🧸' },
    { id: 18, name: 'Repel', price: 350, description: 'Keeps weak wild Pokémon away from your path for 100 steps', category: 'Escape Item', icon: '🧴' },
    { id: 19, name: 'Super Repel', price: 500, description: ' Prevents wild encounters for 200 steps if the lead Pokémon"s level is higher than the wild Pokémon"s level.', category: 'Escape Item', icon: '🧼' },
    { id: 20, name: 'Max Repel', price: 700, description: 'Prevents wild encounters for 250 steps if the lead Pokémon"s level is higher than the wild Pokémon"s level.', category: 'Escape Item', icon: '🧪' }
  ]);

  readonly items = this.inventory.asReadonly();
}
