import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {categoryService} from "../../services/category.service";


export const getAllCategories = createAsyncThunk(
    'categoriesSlice/getAllCategories',
    async (page, {rejectWithValue}) => {
        try {
            const categories = await categoryService.getAllCategories(page);
            return categories;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    categoriesArr: [],
    status: null,
    error: null,
    currentPage: 1,
    totalProductsPage: 0,
};


const categoriesSlice = createSlice({
    name: 'categoriesSlice',

    initialState,

    reducers: {},

    extraReducers: {
        [getAllCategories.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },

        [getAllCategories.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.categoriesArr = action.payload
            state.currentPage = action.payload
            state.totalMoviesPage = action.payload
        },

        [getAllCategories.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;