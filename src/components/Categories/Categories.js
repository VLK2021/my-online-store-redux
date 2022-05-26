import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCategories} from "../../store/slices/categories.slice";
import Category from "../Category/Category";


const Categories = () => {

    const {error, categoriesArr, currentPage, totalProductsPage} = useSelector(store => store.categories);

    const dispatch = useDispatch();
    const page = 1;


    useEffect(() => {
        dispatch(getAllCategories(page))
    }, []);


    return (
        <div className={'categories'}>
            {
                categoriesArr && categoriesArr.map((cat, index) => <Category key={cat.index} category={cat}/>)
            }
        </div>
    );
};

export default Categories;