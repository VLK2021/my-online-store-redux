import React from 'react';

import './CartListStyle.css';
import ProductCardInCart from "../ProductCardInCart/ProductCardInCart";
import { useSelector } from 'react-redux';


const CartList = ({cartArr, onClick }) => {
  const { totalPrice } = useSelector(store => store.cart);

    return (
        <div className={'cartList'}>
            <div className={'cartList-products'}>
                {
                    cartArr.length > 0 ? cartArr.map(prod => <ProductCardInCart key={prod.id} prod={prod}/>) : <p className={'cartList-title-text'}>кошик порожній!!!</p>
                }
            </div>
            <hr/>

            <div className={'cartList-mainOrder'}>{
                cartArr.length > 0 ?
                    <div className={'cartList-order'}>
                        <div className={'cartList-order-totalPrice'}>
                            <p className={'cartList-title-text'}>сумма замовлення:</p>
                            <div className={'cartList-totalPrice'}>{totalPrice} ua</div>
                        </div>

                        <button className={'cartList-btn'} onClick={onClick}>
                            оформити замовлення
                        </button>
                    </div>
                    : null
            }</div>
        </div>
    );
};
export default CartList;
