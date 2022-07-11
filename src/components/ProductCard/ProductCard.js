import React from 'react';
import {useDispatch} from "react-redux";

import star from '../../images/Star.png';
import nextFot from '../../images/fotoF.jpg';
import './ProductCardStyle.css';
import {setProductInCart} from "../../store";


const ProductCard = ({product}) => {
    const {category, price, rating, title, images} = product;
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setProductInCart(product));
    }

    return (
        <div className={'productCard'}>
            <div className={'productCard-img'}>
                <img src={images[0] ? images[0] : nextFot} alt="foot"/>
            </div>

            <div className="productCard-price">
                <div className="productCard-price-star">
                    <p className="size">{rating}</p>
                    <img src={star} alt="icon"/>
                </div>
                <p className="productCard-price-price size">
                    {price}
                </p>
            </div>

            <div className="productCard-text">
                <p className="title size">{title}</p>
                <p className="productCard-text-two size"><span>{category}</span></p>
            </div>

            <button onClick={handleClick}>add to cart</button>
        </div>
    );
};
export default ProductCard;