import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0 
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { 
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) { //if state hes allready this obg, 
                findItem.count++; //take it count+1
            } else { // if didn't fined obj(findItem), 
                state.items.push({ // push this obj & add new key count:1
                    ...action.payload,
                    count: 1,
                })
            };
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
        },

        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
            if (findItem.count === 0) {
                state.items = state.items.filter((obj) => obj.id !== action.payload);
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
        },
        removeItem(state, action) {
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

//selectors
export const cartSelector = state => state.cart;
export const cartItemByIdSelector = (id) => state => state.cart.items.find(obj => obj.id === id);

const {reducer, actions} = cartSlice;
// Action creators are generated for each case reducer function
export const { 
    addItem,
    minusItem,
    removeItem,
    clearItems } = actions;
export default reducer