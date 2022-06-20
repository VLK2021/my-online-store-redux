import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";

import './ProductCardInCartStyle.css';
import {delProductFromCart} from "../../store";

const ProductCardInCart = ({prod}) => {
    const dispatch = useDispatch();

    const {images, title, price, id} = prod;

    const [numberOfProducts, setNumberOfProducts] = useState(1);

    const minusProduct = () => {
        setNumberOfProducts(numberOfProducts - 1);
        if (numberOfProducts <= 1) {
            dispatch(delProductFromCart(id));
        }
    }

    const plusProduct = () => {
        setNumberOfProducts(numberOfProducts + 1);
    }

    return (
        <div className={'productCardInCart'}>
            <div className={'productCardInCart-img'}>
                <img src={images[0]} alt="foto"/>
            </div>

            <div className={'productCardInCart-textTitle'}>
                <p>{title}</p>
            </div>

            <div className={'productCardInCart-AddDell'}>
                <BiMinusCircle onClick={minusProduct}/>

                <p>{numberOfProducts}</p>

                <BiPlusCircle onClick={plusProduct}/>
            </div>

            <div className={'productCardInCart-price'}>
                <p>{price * numberOfProducts}</p>
            </div>

        </div>
    );
};
export default ProductCardInCart;