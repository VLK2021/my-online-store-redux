import {configureStore} from "@reduxjs/toolkit";

import productsReducer from "./slices/products.slice";
import searchReducer from "./slices/search.slice";
import cartReducer from "./slices/cart.slice";
import categoriesReducer from "./slices/categories.slice";
import brandsReducer from "./slices/brands.slice";


const store = configureStore({
    reducer: {
        products: productsReducer,
        searchs: searchReducer,
        cart: cartReducer,
        categories: categoriesReducer,
        brands: brandsReducer,
    }
});

export default store;