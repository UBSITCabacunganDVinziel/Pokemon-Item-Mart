export interface PokemonItem{
    id: number;
    name: string;
    price: number;
    description: string;
    category: 'Poke Ball' | 'Healing Items' | 'Status Healing' | 'Escape Items';
    icon: string;

}

export interface CartItem{
    item: PokemonItem;
    quantity: number;
}
