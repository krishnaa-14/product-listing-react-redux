import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const store = configureStore({
    reducer : {
        products : ProductSlice,
        cart : CartSlice,
        category : CategorySlice,
        search : SearchSlice
    }
})

export default store;