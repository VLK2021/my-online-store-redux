import React from 'react';

import './CartListStyle.css';


const CartList = ({cartArr, onClick, totalPrice}) => {


    return (
        <div className={'cartList'}>

            <div className={'cartList-products'}>
                {
                    cartArr.length > 0 ? cartArr.map(prod => <div key={prod.id}>{prod.brand}
                    <button onClick={()=>null}>del</button>
                    </div>) : 'кошик порожній!'
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