export interface MartItem {
    id: number;
    name: string;
    price: number;
    description: string;
    category: 'Poke Ball' | 'Healing item' | 'Status Healing' | 'Escape Item';
    imageUrl: string;
  }
  
  export interface CartItem {
    item: MartItem;
    quantity: number;
  }