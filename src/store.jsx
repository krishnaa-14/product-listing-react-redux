import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";

const store = configureStore({
    reducer : {
        products : ProductSlice,
        cart : CartSlice,
        category : CategorySlice
    }
})

export default store;