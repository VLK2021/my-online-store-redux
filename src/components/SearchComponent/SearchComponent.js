import React from 'react';
import {useSelector} from "react-redux";

import ProductCard from "../ProductCard/ProductCard";
import './SearchComponentStyle.css';


const SearchComponent = () => {

    const {searchArr} = useSelector(store => store.search);

    return (
        <div className={'searchComponent'}>
            {
                searchArr && searchArr.map(prod => <ProductCard key={prod.id} product={prod}/>)
            }
        </div>
    );
};

export default SearchComponent;