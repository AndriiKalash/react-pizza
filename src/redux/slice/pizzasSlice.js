import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    pizzas: [],
    loadingStatus: 'idle'
}

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
     async (params) => {
        const {carrentPage,
               category,
               sortBy,
               order,
               search
                } = params
        const {data} = await axios.get(
        `https://62a1d4dfcc8c0118ef562de2.mockapi.io/items?page=${carrentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order?'asc':'desc'}${search}`)
        return data;
     }        
);

export const pizzasSlice = createSlice({
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
                    state.loadingStatus = 'loading'
                })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzas = action.payload;
                state.loadingStatus = 'idle'
            })  
            .addCase(fetchPizzas.rejected, state => {
                state.loadingStatus = 'error'
            })  
            .addDefaultCase(() => {})
    }
});

//selector - this is func which return state for (const {pizzas, loadingStatus } = useSelector(pizzaSelector)) , like method createSelector from redux Toolkit, but hand-made :
export const pizzaSelector = (state) => state.pizzas;

const {reducer, actions} = pizzasSlice;
// export const {
//     pizzasFetching,
//     pizzasFetched,
//     pizzasFetchingError} = actions;
export default reducer;