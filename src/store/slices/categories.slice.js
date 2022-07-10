import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services";


export const getAllCategories = createAsyncThunk(
    'categoriesSlice/getAllCategories',
    async (_, {rejectWithValue}) => {
        try {
            const categoriesA = await productsService.getCategories();
            return categoriesA;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    categoriesArr: [],
    status: null,
    error: null,
}

const categoriesSlice = createSlice({
        name: 'categoriesSlice',
        initialState,

        reducers: {},

        extraReducers: {
            [getAllCategories.pending]: (state, action) => {
                state.status = 'Loading'
                state.error = null
            },

            [getAllCategories.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.categoriesArr = action.payload
            },

            [getAllCategories.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
        }
    }
);

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;