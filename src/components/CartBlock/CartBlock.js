import React from 'react';
import {BiCartAlt} from 'react-icons/bi'
import {useSelector} from "react-redux";

import './CartBlockStyle.css';
import CartList from "../CartList/CartList";


const CartBlock = () => {

    const {cartArr} = useSelector(store => store.cart);

    const totalPrice = cartArr.reduce((acc, product) => acc += product.price, 0);


    return (
        <div className={'cartBlock'}>
            <BiCartAlt size={23} className={'cartBlock-bitCartAlt'}/>

            <div className={'cartBlock-totalPrice'}>{totalPrice} ua</div>

            <CartList cartArr={cartArr} onClick={()=>null} totalPrice={totalPrice}/>
        </div>
    );
};

export default CartBlock;