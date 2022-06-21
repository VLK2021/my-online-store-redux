import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartArr: [],
    totalPrice: 0,
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
        },

        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    },

    extraReducers: {
    }
});
export const {setProductInCart, delProductFromCart, setTotalPrice} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;