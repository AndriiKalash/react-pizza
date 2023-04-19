import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from "./cart/slise";
import pizzas from "./pizza/slice";
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizzas
    },
    devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 