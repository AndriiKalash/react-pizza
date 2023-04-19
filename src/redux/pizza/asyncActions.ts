import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza } from "./type";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string> >(
    'pizzas/fetchPizzas',
     async (params) => {
        const {carrentPage,
               category,
               sortBy,
               order,
               search
                } = params
        const {data} = await axios.get(
        `https://62a1d4dfcc8c0118ef562de2.mockapi.io/items?page=${carrentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)

        return data ;
     }        
);