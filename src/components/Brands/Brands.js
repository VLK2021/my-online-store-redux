import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllBrands} from "../../store";
import Brand from "../Brand/Brand";
import './BrandsStyle.css';

const Brands = () => {
    const dispatch = useDispatch();
    const {brandsArr} = useSelector(store => store.brands);

    useEffect(() => {
        dispatch(getAllBrands());
    }, []);

    return (
        <div className={'brands'}>
            {
                brandsArr.length > 0 ? brandsArr.map((bran, index) => <Brand key={index} bran={bran}/>) : null
            }
        </div>
    );
};
export default Brands;