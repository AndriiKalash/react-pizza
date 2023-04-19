import { CartItemType } from "../redux/cart/type";
import { calcTotalCount, calcTotalPrice } from "./calcTotal";

export const getCartItemsFromLS = () => {
    const data = localStorage.getItem('cart');
    const items =  data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
    const totalCount = calcTotalCount(items);
    return{
        items: items as CartItemType[],
        totalPrice,
        totalCount
    }
}                