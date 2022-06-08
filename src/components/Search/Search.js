import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

// import {getSearchProducts} from "../../store";
import './SearchStyle.css';


const Search = () => {
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm();
    const navigate = useNavigate();

    const url = useParams();
    // console.log('url',url.word);

    // const page = useSelector(store => store.searchs.currentPage);
    const page = 1;

    // /products?_page=${page}&_limit=9&q=${url}`.concat(`&q=${word}`)

    
    const submit = (data) => {
        let word = data.search
        // navigate(`/products?_page=${page}&_limit=9&q=${url}`.concat(`&q=${word}`))
        // navigate(`prod&${url}`.concat(`&q=${word}`))
        // dispatch(getSearchProducts({url:url.word, word, page}))

        navigate(`/search/${word}`)
        // dispatch(getSearchProducts({word, page}))
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