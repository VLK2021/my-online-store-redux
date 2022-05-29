import {configureStore} from "@reduxjs/toolkit";

import productsReducer from "./slices/products.slice";
import searchReducer from "./slices/search.slice";



const store = configureStore({
    reducer: {
        products: productsReducer,
        search: searchReducer,
    }
});

export default store;