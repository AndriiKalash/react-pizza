import { RootState } from "../store";

//selectors
export const cartSelector = (state: RootState) => state.cart;
export const cartItemByIdSelector = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id);