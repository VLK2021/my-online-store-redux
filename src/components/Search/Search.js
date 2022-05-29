import React from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

import './SearchStyle.css';


const Search = () => {

    const {searchArr} = useSelector(store => store.search);


    const {register, reset, handleSubmit} = useForm();

    // const submit = (data) => {
    //     let w = searchArr.filter(el =>el.brand === data.search);
    //     console.log(w);
    //     reset()
    // }

    return (
        <div className={'search'}>
            <form>
                <input className={'search-input'} {...register('search')} type="text" placeholder={'Search'}/>
            </form>
        </div>
    );
};

export default Search;