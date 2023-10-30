import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addProductToCart : (state, action) => {
            return [...state, action.payload]
        },

        removeProductFromCart : (state, action) => {

        }
    }
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;