import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getSearchProducts} from "../../store/slices/search.slice";
import './SearchStyle.css';


const Search = () => {
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm();
    const navigate = useNavigate();

    const {currentPage} = useSelector(store => store.search);


    const submit = (data) => {
        let word = data.search
        navigate(`/search/${word}`)
        dispatch(getSearchProducts({word, currentPage}))
        reset()
    }

    return (
        <div className={'search'}>
            <form onSubmit={handleSubmit(submit)}>
                <input className={'search-input'} {...register('search')} type="text" placeholder={'Search...'}/>
            </form>
        </div>
    );
};

export default Search;

// let w = searchArr.filter(el =>el.brand === data.search);