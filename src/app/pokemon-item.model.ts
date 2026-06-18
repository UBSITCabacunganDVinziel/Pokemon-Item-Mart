export interface PokemonItem{
    id: number;
    name: string;
    price: number;
    description: string;
    category: 'Poke Ball' | 'Healing Item' | 'Status Healing' | 'Escape Item';
    imageUrl: string;

}

export interface CartItem{
    item: PokemonItem;
    quantity: number;
}
