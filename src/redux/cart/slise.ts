import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getCartItemsFromLS } from '../../utils/getCartItemsFromLS';
import { calcTotalCount, calcTotalPrice } from '../../utils/calcTotal';
import { CartItemType, CartSliceState } from './type';



const {items, totalPrice, totalCount} = getCartItemsFromLS();
const initialState: CartSliceState = {
    items,
    totalPrice,
    totalCount 
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { 
        addItem(state, action: PayloadAction<CartItemType>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) { //if state hes allready this obg, 
                findItem.count++; //take it count+1
            } else { // if didn't fined obj(findItem), 
                state.items.push({ // push this obj & add new key count:1
                    ...action.payload,
                    count: 1,
                })
            };
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotalCount(state.items);
        },

        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }    
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
            
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
})

const {reducer, actions} = cartSlice;
// Action creators are generated for each case reducer function
export const { 
    addItem,
    minusItem,
    removeItem,
    clearItems } = actions;
export default reducer