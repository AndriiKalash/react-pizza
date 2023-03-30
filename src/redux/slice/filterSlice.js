import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: { name: 'популярности(DESC)', sortProperty: 'rating' },
    carrentPage: 1,
    searchValue: '' 
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setCarrentPage(state, action) {
            state.carrentPage = action.payload;
        },
        setFilters(state, action) {
            state.sort = action.payload.sortParams;
            state.categoryId = Number(action.payload.categoryId);
            state.carrentPage = Number(action.payload.carrentPage);
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        }
    },
})

export const filterSelector = (state) => state.filter;

const {reducer, actions} = filterSlice;
// Action creators are generated for each case reducer function
export const {
    setCategoryId, 
    setSort,
    setCarrentPage,
    setFilters, 
    setSearchValue } = actions
export default reducer