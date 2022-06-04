import React from 'react';

import './ProductCardInCartStyle.css';
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";

const ProductCardInCart = ({prod}) => {
    const {images, title, price} = prod;

    return (
        <div className={'productCardInCart'}>
            <div className={'productCardInCart-img'}>
                <img src={images[0]} alt="foto"/>
            </div>

            <div className={'productCardInCart-textTitle'}>
                <p>{title}</p>
            </div>

            <div className={'productCardInCart-AddDell'}>
                <BiMinusCircle/>
                <p>{10}</p>
                <BiPlusCircle/>
            </div>

            <div className={'productCardInCart-price'}>
                <p>{price}</p>
            </div>


        </div>
    );
};

export default ProductCardInCart;