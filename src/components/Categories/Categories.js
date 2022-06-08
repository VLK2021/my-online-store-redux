import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCategories} from "../../store";
import Category from "../Category/Category";
import './CategoriesStyle.css';


const Categories = () => {
    const dispatch = useDispatch();
    const {categoriesArr, error} = useSelector(store => store.categories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    return (
        <div className={'categories'}>
            <div className={'categories-error'}>
                {error && <h1>{error}</h1>}
            </div>

            {
                categoriesArr.length > 0 ? categoriesArr.map((cat, index) => <Category key={index} cat={cat}/>) : null
            }
        </div>
    );
};

export default Categories;