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

export const getTotalProducts = createAsyncThunk(
    'productsSlice/getTotalProducts',
    async (page, {rejectWithValue}) => {
        try {
            const totalP = await productsService.getTotalPagesProducts(page);
            return totalP;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    productsArr: [],
    status: null,
    error: null,
    totalProductsInArr: 1,
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
        [getTotalProducts.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },


        [getAllProducts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.productsArr = action.payload
        },
        [getTotalProducts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.totalProductsInArr = action.payload
        },


        [getAllProducts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getTotalProducts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    },
});
const productsReducer = productsSlice.reducer;
export default productsReducer;