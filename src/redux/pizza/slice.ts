import { createSlice} from "@reduxjs/toolkit";
import { PizzaSliceState, Status } from "./type";
import { fetchPizzas } from "./asyncActions";


const initialState: PizzaSliceState = {
    pizzas: [],
    loadingStatus: Status.LOADING
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {        
        // pizzasFetching(state){
        //     state.loadingStatus = 'loading'
        // },
        // pizzasFetched(state, action){
        //     state.pizzas = action.payload;
        //     state.loadingStatus = 'idle'
        // },
        // pizzasError(state){
        //     state.loadingStatus = 'error'
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, state => {
                    state.loadingStatus = Status.LOADING
                })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzas = action.payload;
                state.loadingStatus = Status.SUCCES
            })  
            .addCase(fetchPizzas.rejected, state => {
                state.loadingStatus = Status.ERROR
            })  
            .addDefaultCase(() => {})
    }
});



const {reducer, actions} = pizzasSlice;

export default reducer;