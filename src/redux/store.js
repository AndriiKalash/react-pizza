import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/filterSlice';
import cart from './slice/cartSlice';
import pizzas from "./slice/pizzasSlice";

export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizzas
    },
    devTools: process.env.NODE_ENV !== "production",
})