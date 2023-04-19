import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FilterSliceState, SortType } from './type';



const initialState: FilterSliceState = {
    categoryId: 0,
    sort: { name: 'популярности(DESC)', sortProperty: 'rating' },
    carrentPage: 1,
    searchValue: '' 
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSort(state, action: PayloadAction<SortType>) {
            state.sort = action.payload;
        },
        setCarrentPage(state, action: PayloadAction<number>) {
            state.carrentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
            state.carrentPage = Number(action.payload.carrentPage);
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        }
    },
})


const {reducer, actions} = filterSlice;
// Action creators are generated for each case reducer function
export const {
    setCategoryId, 
    setSort,
    setCarrentPage,
    setFilters, 
    setSearchValue } = actions
export default reducer