import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";

import {getSearchProducts, getTotalSearch} from "../../store";
import './SearchStyle.css';


const Search = () => {
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const page = 1;

    const submit = (data) => {
        const word = pathname.replace('/', '').concat(`q=${data.search}&`.toLowerCase());

        navigate(`${word}`)
        dispatch(getTotalSearch({word, page}));
        dispatch(getSearchProducts({word, page}));
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

