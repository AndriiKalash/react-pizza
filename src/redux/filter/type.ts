export type SortType = {
    name: string;
    sortProperty: 'rating'|'-rating'|'price'|'-price'|'title'|'-title'
}
 
export interface FilterSliceState {
    categoryId: number;
    sort: SortType;
    carrentPage: number;
    searchValue?: string; 
}