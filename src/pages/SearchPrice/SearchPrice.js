import React from 'react';
import {useSelector} from "react-redux";

import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductCard/ProductCard";

const SearchPrice = () => {

    const {priceArr, totalProductsInArr, error} = useSelector(store => store.price);

    return (
        <div>
            {error && <h1>{error}</h1>}
            search price
            <div>{
                priceArr && priceArr.map(prod => <ProductCard key={prod.id} product={prod}/> )
            }</div>

            <Pagination totalProductsInArr={totalProductsInArr}/>
        </div>
    );
};

export default SearchPrice;