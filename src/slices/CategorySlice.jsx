
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name : 'category',
    initialState : [],
    reducers : {
        addProductsToCategory : (state, action) => {
            return action.payload;
        }
    }
})

export const { addProductsToCategory } = categorySlice.actions;

export default categorySlice.reducer;