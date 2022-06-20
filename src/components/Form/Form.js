import React from 'react';
import {useNavigate} from "react-router-dom";

import './FormStyle.css';
import Categories from "../Categories/Categories";
import Brands from "../Brands/Brands";
import SliderPrice from "../SliderPrice/SliderPrice";
import SliderRating from "../SliderRating/SliderRating";


const Form = () => {
    const navigate = useNavigate();

    const submit = (e) => {
        const box = document.getElementsByClassName('checkbox');
        const sliderRating =document.getElementsByClassName('slidR');
        if (sliderRating.innerText !== "0\n5"){
            console.log(sliderRating[0].children[2].value);
            console.log(sliderRating);
            sliderRating[0].children[2].value = "0,5"
            console.log(sliderRating[0].children[2].value);
        }
        for (let i = 0; i < box.length; i++) {
            if (box[i].checked) {
                box[i].checked = !box[i].checked;
            }
        }
        navigate(`/`);
    };


    return (
        <div className={'formWrapper'}>

            <div className={'formWrapper-sliderPrice marginBottom'}>
                <h3>Search Price</h3>
                <SliderPrice/>
            </div>

            <div className={'formWrapper-categories marginBottom'}>
                <h3 className={'categories-h3'}>Categories</h3>
                <Categories/>
            </div>

            <div className={'formWrapper-brands marginBottom'}>
                <h3 className="brands-h3">Brands</h3>
                <Brands/>
            </div>

            <div className={'formWrapper-sliderRating marginBottom'}>
                <h3>Search Rating</h3>
                <SliderRating/>
            </div>

            <button className={'form-btn'} onClick={e => submit(e)}>clear all filters</button>
        </div>
    );
};
export default Form;

