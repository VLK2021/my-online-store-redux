import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {getSearchProducts} from "../../store";
import './SearchStyle.css';


const Search = () => {
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm();
    const navigate = useNavigate();

    const page = 1;

    const submit = (data) => {
        const word = `q=${data.search}`.toLowerCase();
        navigate(`/${word}`)
        dispatch(getSearchProducts({word, page}))
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

