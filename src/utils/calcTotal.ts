import { CartItemType } from "../redux/cart/type";

export const calcTotalPrice = (items: CartItemType[]) => {
   return items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
    }, 0);
}

export const calcTotalCount = (items: CartItemType[]) => {
    return items.reduce((sum, item) => sum + item.count, 0);
} 