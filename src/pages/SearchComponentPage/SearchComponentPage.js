import React from 'react';
import {useSelector} from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";
import './SearchComponentPageStyle.css';
import {getAllProducts} from "../../store/slices/products.slice";
import Pagination from "../../components/Pagination/Pagination";



const SearchComponentPage = () => {

    const {searchArr, totalProductsPage, currentPage} = useSelector(store => store.search);

    return (
        <div className={'searchComponent'}>
            {
                searchArr && searchArr.map(prod => <ProductCard key={prod.id} product={prod}/>)
            }
            <Pagination totalProductsPage={totalProductsPage} currentPage={currentPage} pageChange={getAllProducts}/>
        </div>
    );
};

export default SearchComponentPage;