import {configureStore} from "@reduxjs/toolkit";

import productsReducer from "./slices/products.slice";
import searchReducer from "./slices/search.slice";
import cartReducer from "./slices/cart.slice";



const store = configureStore({
    reducer: {
        products: productsReducer,
        search: searchReducer,
        cart: cartReducer,
    }
});

export default store;