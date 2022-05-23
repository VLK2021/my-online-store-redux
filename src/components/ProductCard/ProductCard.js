import React from 'react';

import star from '../../images/Star.png';
import nextFot from '../../images/fotoF.jpg';
import './ProductCardStyle.css';


const ProductCard = ({product}) => {
    const {id, brand, category, price, rating, title, images} = product;


    return (
        <div className={'productCard'}>
            <div className={'productCard-img'}>
                <img src={images[0]? images[0] : nextFot} alt="foot"/>
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

            <button>add to cart</button>
        </div>
    );
};

export default ProductCard;