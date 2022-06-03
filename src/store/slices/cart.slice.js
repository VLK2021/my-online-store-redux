import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartArr: [],
};

const cartSlice = createSlice({

    name: 'cartSlice',

    initialState,

    reducers: {
        setProductInCart: (state, action) => {
            state.cartArr.push(action.payload)
        },

        delProductFromCart: (state, action) => {
            state.cartArr = state.cartArr.filter(prod => prod.id !== action.payload)
        }
    },

    extraReducers: {
    }
});

export const {setProductInCart, delProductFromCart} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;