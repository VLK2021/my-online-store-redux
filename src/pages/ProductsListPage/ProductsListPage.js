import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';

import {getAllProducts} from "../../store";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import './ProductsListPageStyle.css';


const ProductsListPage = () => {
    const {error, productsArr, pageNumber, totalProductsPages} = useSelector(store => store.products);

    const dispatch = useDispatch();
    const page = pageNumber;

    useEffect(() => {
        dispatch((getAllProducts(page)))
    }, []);

    return (
        <div className={'products'}>
            {error && <h1>{error}</h1>}

            <div className={'products-all'}>{
                productsArr.length > 0 ? productsArr.map(prod => <ProductCard key={prod.id} product={prod}/>) : ''
            }</div>

            <Pagination pageNumber={page} totalProductsPages={totalProductsPages}/>
        </div>
    );
};

export default ProductsListPage;