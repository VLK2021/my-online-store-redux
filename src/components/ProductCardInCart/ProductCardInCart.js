import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";

import './ProductCardInCartStyle.css';
import {delProductFromCart, setProductInCart} from "../../store";

const ProductCardInCart = ({prod, totalPrice}) => {
    const dispatch = useDispatch();

    const {images, title, price, id} = prod;

    const [numberOfProducts, setNumberOfProducts] = useState(1);

    const minusProduct = () => {
        setNumberOfProducts(numberOfProducts - 1);
        if (numberOfProducts <= 1) {
            dispatch(delProductFromCart(id));
        }
        // dispatch(setTotalPrice(totalPr - price * numberOfProducts))
    }

    const plusProduct = () => {
        setNumberOfProducts(numberOfProducts + 1);
        // dispatch(setTotalPrice(totalPr + price * numberOfProducts))
        dispatch(setProductInCart(prod));
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