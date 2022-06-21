import React from 'react';

import './CartListStyle.css';
import ProductCardInCart from "../ProductCardInCart/ProductCardInCart";
import { useSelector } from 'react-redux';


const CartList = ({cartArr, onClick }) => {
  const { totalPrice } = useSelector(store => store.cart);

  // const newCartArr = [];
    // for (const element of cartArr) {
    //     if (!newCartArr.includes(element)) {
    //         newCartArr.push(element);
    //     }
    // }

    return (
        <div className={'cartList'}>
            <div className={'cartList-products'}>
                {
                    cartArr.length > 0 ? cartArr.map(prod => <ProductCardInCart key={prod.id} prod={prod}/>) : 'кошик пустий'
                }
            </div>
            <hr/>

            <div className={'cartList-mainOrder'}>{
                cartArr.length > 0 ?
                    <div className={'cartList-order'}>
                        <div className={'cartList-order-totalPrice'}>
                            <p>сумма замовлення:</p>
                            <div>{totalPrice}</div>
                        </div>

                        <button onClick={onClick}>
                            оформити замовлення
                        </button>
                    </div>
                    : null
            }</div>

        </div>
    );
};
export default CartList;
