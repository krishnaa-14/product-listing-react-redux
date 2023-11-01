import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
    name : 'search',
    initialState : [],
    reducers : {
        addProductsToSearch : (state, action) => {
            return action.payload;
        }
    }
})

export const { addProductsToSearch} = SearchSlice.actions;

export default SearchSlice.reducer;