import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
import FilterStatusSlice from "./slices/FilterStatusSlice";
import FilterProductsSlice from "./slices/FilterProductsSlice";

const store = configureStore({
    reducer : {
        products : ProductSlice,
        cart : CartSlice,
        category : CategorySlice,
        search : SearchSlice,
        filterStatus : FilterStatusSlice,
        filterProducts : FilterProductsSlice
    }
})

export default store;