import React from 'react';
import {useSelector} from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import './SearchComponentPageStyle.css';


const SearchComponentPage = () => {

    const {searchArr} = useSelector(store => store.searchs);

    return (
        <div className={'searchComponent'}>

                {
                    searchArr && searchArr.map(prod => <ProductCard key={prod.id} product={prod}/>)
                }

            {/*<Pagination totalProductsPage={totalProductsPage} currentPage={currentPage} pageChange={getAllProducts}/>*/}
            <Pagination/>
        </div>
    );
};

export default SearchComponentPage;