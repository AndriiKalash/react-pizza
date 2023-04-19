export type Pizza = {
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types:number[];
    id: string  
}

export enum  Status{
    LOADING = "loading",
    SUCCES = "idle",
    ERROR = "error"
}

export interface PizzaSliceState  {
    pizzas: Pizza[];
    loadingStatus: Status
}
