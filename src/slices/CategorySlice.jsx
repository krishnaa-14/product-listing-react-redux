
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name : 'category',
    initialState : [],
    reducers : {
        addProductsToCategory : (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const { addProductsToCategory } = categorySlice.actions;

export default categorySlice.reducer;