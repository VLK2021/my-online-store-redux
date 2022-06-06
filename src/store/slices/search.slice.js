import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";


export const getSearchProducts = createAsyncThunk(
    'searchSlice/getSearchProducts',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const searchA = await productsService.getAllSearch(word, page)
            return searchA
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const initialState = {
    searchArr: [],
    status: null,
    error: null,
    currentPage: 1,
    totalProductsPage: 12,
}

const searchSlice = createSlice({
    name: 'searchSlice',

    initialState,

    reducers: {},

    extraReducers: {
        [getSearchProducts.pending]: (state, action) => {
            state.ststus = 'Loading...'
            state.error = null
        },

        [getSearchProducts.fulfilled]: (state, action) => {
            state.ststus = 'fulfilled'
            state.searchArr = action.payload
            state.currentPage = action.payload.page
            state.totalProductsPage = action.payload.totalProductsPage
        },

        [getSearchProducts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = state.payload
        },
    },
});

const searchReducer = searchSlice.reducer;
export default searchReducer;