import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";


export const getSearchProducts = createAsyncThunk(
    'searchSlice/getSearchProducts',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const searchA = await productsService.getAllSearch(word, page);
            return searchA
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getTotalSearch = createAsyncThunk(
    'searchSlice/getTotalSearch',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const totalS = await productsService.getTotalPagesSearch(word, page);
            return totalS;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const initialState = {
    searchArr: [],
    status: null,
    error: null,
    totalProductsInArr: 18,
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},

    extraReducers: {
        [getSearchProducts.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getTotalSearch.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },


        [getSearchProducts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.searchArr = action.payload
        },
        [getTotalSearch.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.totalProductsInArr = action.payload
        },


        [getSearchProducts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = state.payload
        },
        [getTotalSearch.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = state.payload
        },
    },
});
const searchReducer = searchSlice.reducer;
export default searchReducer;