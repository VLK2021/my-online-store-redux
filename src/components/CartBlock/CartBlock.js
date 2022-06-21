import React, {useState} from 'react';
import {BiCartAlt} from 'react-icons/bi'
import {useSelector} from "react-redux";

import CartList from "../CartList/CartList";
import CartCircle from "../CartCircle/CartCircle";
import './CartBlockStyle.css';


const CartBlock = () => {
    const [cartListVisible, setCartListVisible] = useState(false);
    const {cartArr, totalPrice} = useSelector(store => store.cart);

    return (
        <div className={'cartBlock'}>
            <div className={'cartBlock-first'}><CartCircle arr={cartArr}/>

                <BiCartAlt
                    size={30}
                    className={'cartBlock-bitCartAlt'}
                    onClick={() => setCartListVisible(!cartListVisible)}
                />

                <p className={'cartBlock-text'}>cart</p></div>

            <div className={'cartBlock-second'}>
                {totalPrice > 0 ? (
                <div className={'cartBlock-totalPrice'}>{totalPrice} ua</div>
            ) : null}
            </div>

            {cartListVisible && <CartList cartArr={cartArr} onClick={() => null}/>}
        </div>
    );
};
export default CartBlock;
