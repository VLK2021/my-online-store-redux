import React from 'react';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './CategoryStyle.css';
import {getSearchProducts, getTotalSearch} from "../../store";


const Category = ({cat}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const page = 1;

    // const changeCategories = (e) => {
    //     if (e.target.checked === true) {
    //         const word = pathname.replace('/', '').concat(`category=${e.target.name}&`.toLowerCase());
    //         dispatch(getTotalSearch({word, page}));
    //         dispatch(getSearchProducts({word, page}));
    //         navigate(`${word}`)
    //     } else {
    //         const word = pathname.replace(`category=${e.target.name}&`.toLowerCase(), '').replace('/', '')
    //         dispatch(getTotalSearch({word, page}));
    //         dispatch(getSearchProducts({word, page}));
    //         navigate(`${word}`)
    //     }
    // };


    const changeCategories = (e) => {
        if (e.target.checked === true) {

            if (pathname.includes('my-online-store-redux/') === true) {
                const word = pathname.concat(`category=${e.target.name}&`.toLowerCase());

                console.log(word.replace('/my-online-store-redux/', ''));

                dispatch(getTotalSearch({word, page}));
                dispatch(getSearchProducts({word, page}));
                navigate(`${word}`)
            }


        } else {
            const word = pathname.replace(`my-online-store-redux/category=${e.target.name}&`.toLowerCase(), '').replace('/', '')
            dispatch(getTotalSearch({word, page}));
            dispatch(getSearchProducts({word, page}));
            navigate(`${word}`)
        }
    }

    return (
        <div className={'category'}>
            <form name={'categories'}>
                <input
                    className="checkbox"
                    type="checkbox"
                    name={cat.replace(' ', "_")}
                    onInput={changeCategories}
                />
                <label className={'category-label'}>{cat}</label>
            </form>
        </div>
    );
};
export default Category;