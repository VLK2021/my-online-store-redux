import React from 'react';
// import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import './FormStyle.css';
import Categories from "../Categories/Categories";
import Brands from "../Brands/Brands";
import SliderPrice from "../SliderPrice/SliderPrice";
// import {getSearchProducts} from "../../store";


const Form = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const url = useParams();
    // console.log('url', url);

    // const realUrl = (url) => {
    //     if (url.length > 0){
    //         return url
    //     }
    // };
    // console.log(realUrl);

    // const page = 1;
    //

    // const change = (e) => {
    //     if (e.target.checked) {
    //         let word = e.target.name;
    //         // navigate(`/search/${url}`.concat(`&q=${word}`))
    //         // navigate(`/products?_page=${page}&_limit=9&q=${url}`.concat(`&q=${word}`))
    //         // navigate(`prod&${url}`.concat(`&q=${word}`))
    //         dispatch(getSearchProducts({url:url.word, word, page}))
    //         navigate(`/search/${word}`)
    //         // dispatch(getSearchProducts({word, page}))
    //     } else {
    //         navigate(`/`)
    //     }
    // }

    // const submit = (e) => {
    //     const box = document.getElementsByClassName('checkbo');
    //     for (let i = 0; i < box.length; i++) {
    //         if (box[i].checked) {
    //             box[i].checked = !box[i].checked;
    //         }
    //     }
    //     navigate(`/`);
    // }

    const submit = (e) => {
        const box = document.getElementsByClassName('checkbox');
        for (let i = 0; i < box.length; i++) {
            if (box[i].checked) {
                box[i].checked = !box[i].checked;
            }
        }
        navigate(`/`);
    };


    return (
        <div className={'formWrapper'}>

            <div className={'formWrapper-sliderPrice'}>
                <h3>Search Price</h3>
                <SliderPrice/>
            </div>

            <div className={'formWrapper-categories'}>
                <h3 className={'categories-h3'}>Categories</h3>
                <Categories/>
            </div>

            <div className={'formWrapper-brands'}>
                <h3 className="brands-h3">Brands</h3>
                <Brands/>
            </div>

            <button className={'form-btn'} onClick={e => submit(e)}>clear all filters</button>
        </div>
    );
};
export default Form;

