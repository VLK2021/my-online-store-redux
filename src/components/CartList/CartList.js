import React from 'react';

import './CartListStyle.css';


const CartList = ({cartArr, onClick, totalPrice}) => {


    return (
        <div className={'cartList'}>

            <div className={'cartList-products'}>
                {
                    cartArr.length > 0 ? cartArr.map(prod => prod.brand) : 'кошик порожній!'
                }
            </div>
            <hr/>
            {
                cartArr.length > 0 ?
                    <div className={'cartList-order'}>
                        <div className={'cartList-order-totalPrice'}>
                            <p>сумма замовлення:</p>
                            <div>{totalPrice}</div>
                        </div>

                        <button>
                            оформити замовлення
                        </button>

                    </div>
                    : null
            }

        </div>
    );
};

export default CartList;