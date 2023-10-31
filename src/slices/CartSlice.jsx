import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addProductToCart : (state, action) => {
            state.push(action.payload);
            return state;
        },

        removeProductFromCart : (state, action) => {
            return state.filter(product => product.productId !== action.payload);
        }
    }
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;