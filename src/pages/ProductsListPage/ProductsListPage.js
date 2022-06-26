import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';

import {getAllProducts, getTotalProducts} from "../../store";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import './ProductsListPageStyle.css';


const ProductsListPage = () => {
    const {error, productsArr, totalProductsInArr} = useSelector(store => store.products);
    const dispatch = useDispatch();

    const page = 1;

    useEffect(() => {
        dispatch(getTotalProducts(page));
        dispatch(getAllProducts(page));
    }, []);

    return (
        <div className={'products'}>
            {error && <h1>{error}</h1>}

            <div className={'products-all'}>{
                productsArr.length > 0 ? productsArr.map(prod => <ProductCard key={prod.id} product={prod}/>) : ''
            }</div>

            <Pagination totalProductsInArr={totalProductsInArr}/>
        </div>
    );
};
export default ProductsListPage;