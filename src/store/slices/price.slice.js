import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services";


export const getValuePrice = createAsyncThunk(
    'priceSlice/getValuePrice',
    async ({url, page, price_gte, price_lte}, {rejectWithValue}) => {
        try {
            const searchPrice = await productsService.getSearchPrice(url, page, price_gte, price_lte);
            console.log(searchPrice);
            return searchPrice
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getTotalPagesPrice = createAsyncThunk(
    'priceSlice/getTotalPagesPrice',
    async ({url, page, price_gte, price_lte}, {rejectWithValue}) => {
        try {
            const searchTotalP = await productsService.getTotalPagesSearchPrice(url, page, price_gte, price_lte);
            console.log(searchTotalP);

            return searchTotalP
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


const initialState = {
    status: null,
    error: null,
    priceArr: [],
    totalProductsInArr: 9,
}

const priceSlice = createSlice({
    name: 'priceSlice',
    initialState,
    reducers: {},

    extraReducers: {
        [getValuePrice.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getTotalPagesPrice.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },

        [getValuePrice.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.priceArr = action.payload
        },
        [getTotalPagesPrice.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.totalProductsInArr = action.payload
        },

        [getValuePrice.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getTotalPagesPrice.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});
const priceReducer = priceSlice.reducer;
export default priceReducer;