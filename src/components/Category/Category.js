import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";

import './CategoryStyle.css';
import {getSearchProducts} from "../../store";


const Category = ({cat}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useSearchParams();


    const page = 1;

    const changeCategories = (e) => {
        e.preventDefault();
        const word = `category=${e.target.name}`.toLowerCase();

        setQuery({www:e.target.name})

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