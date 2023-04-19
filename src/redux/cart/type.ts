export type CartItemType = {
    id: string;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
    size: number;
    type:string;
}

export interface CartSliceState {
    items: CartItemType[];
    totalPrice: number;
    totalCount: number 
}