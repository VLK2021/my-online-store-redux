import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";


export const getAllProducts = createAsyncThunk(
    'productsSlice/getAllProducts',

    async (page, {rejectWithValue}) => {
        try {
            const productsAr = await productsService.getAllProducts(page);
            return productsAr
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    productsArr: [],
    status: null,
    error: null,
    pageNumber: 1,
    totalProductsPages: 12,
};


const productsSlice = createSlice({
    name: 'productsSlice',

    initialState,

    reducers: {},

    extraReducers: {
        [getAllProducts.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },

        [getAllProducts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.productsArr = action.payload
            state.pageNumber = action.payload.page
        },

        [getAllProducts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    },
});

const productsReducer = productsSlice.reducer;
export default productsReducer;