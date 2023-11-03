import { createSlice } from '@reduxjs/toolkit';

const FilterProductsSlice = createSlice({
    name : 'filterproducts',
    initialState : [],
    reducers : {
        addFilterProducts : (state, action) => {
            console.log("Filter products slice");
            console.log(action.payload);
            return action.payload;
        }
    }
})

export const { addFilterProducts } = FilterProductsSlice.actions;

export default FilterProductsSlice.reducer;