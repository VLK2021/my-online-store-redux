import {configureStore} from "@reduxjs/toolkit";

import productsReducer from "./slices/products.slice";
import categoriesReducer from "./slices/categories.slice";


const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
    }
});

export default store;