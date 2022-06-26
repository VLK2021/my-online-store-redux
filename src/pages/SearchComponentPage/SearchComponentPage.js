import React from 'react';
import {useSelector} from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import './SearchComponentPageStyle.css';


const SearchComponentPage = () => {
    const {searchArr, totalProductsInArr} = useSelector(store => store.searchs);

    return (
        <div className={'searchComponent'}>
            <div className={'searchComponent-prod'}>{
                searchArr && searchArr.map(prod => <ProductCard key={prod.id} product={prod}/>)
            }</div>

            <Pagination totalProductsInArr={totalProductsInArr}/>
        </div>
    );
};
export default SearchComponentPage;