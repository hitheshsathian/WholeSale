export interface Cart{
    items: Array<CartItem>;
}


export interface CartItem{
    product: string;
    name: string;
    price: number;
    quanitity: number;
    id: number;
}