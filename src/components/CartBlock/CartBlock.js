import React, {useState} from 'react';
import {BiCartAlt} from 'react-icons/bi'
import {useSelector} from "react-redux";

import CartList from "../CartList/CartList";
import CartCircle from "../CartCircle/CartCircle";
import './CartBlockStyle.css';


const CartBlock = () => {
    const [cartListVisible, setCartListVisible] = useState(false);
    const {cartArr} = useSelector(store => store.cart);

    const totalPrice = cartArr.reduce((acc, product) => acc += product.price, 0);


    return (
        <div className={'cartBlock'}>
            <CartCircle length={cartArr.length}/>

            <BiCartAlt
                size={30}
                className={'cartBlock-bitCartAlt'}
                onClick={() => setCartListVisible(!cartListVisible)}
            />

            <p className={'cartBlock-text'}>cart</p>

            {/*{totalPrice > 0 ? (*/}
            {/*    <div className={'cartBlock-totalPrice'}>{totalPrice} ua</div>*/}
            {/*) : null}*/}

            {cartListVisible && <CartList cartArr={cartArr} onClick={() => null} totalPrice={totalPrice}/>}

        </div>

    );
};

export default CartBlock;