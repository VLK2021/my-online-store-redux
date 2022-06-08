import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productsService} from "../../services/products.service";



export const getAllBrands = createAsyncThunk(
    'brandsSlice/getAllBrands',
    async (_, {rejectWithValue}) => {
        try {
            const brandsA = await productsService.getBrands();
            return brandsA;
        }catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    brandsArr: [],
    status: null,
    error: null,
};

const brandsSlice = createSlice({
    name: 'brandsSlice',
    initialState,
    reducers: {},

    extraReducers: {
        [getAllBrands.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },

        [getAllBrands.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.brandsArr = action.payload
        },

        [getAllBrands.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    },
});

const brandsReducer = brandsSlice.reducer;
export default brandsReducer;