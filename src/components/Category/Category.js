import React from 'react';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './CategoryStyle.css';
import {getSearchProducts} from "../../store";


const Category = ({cat}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {pathname} = useLocation();

    const page = 1;

    const changeCategories = (e) => {
        e.preventDefault();
        const word = pathname.replace('/', '').concat(`category=${e.target.name}&`.toLowerCase());
        navigate(`${word}`)
        dispatch(getSearchProducts({word, page}))
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
                <label>{cat}</label>
            </form>
        </div>
    );
};
export default Category;