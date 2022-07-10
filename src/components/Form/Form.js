import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import './FormStyle.css';
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";
import SliderPrice from "../SliderPrice/SliderPrice";
import SliderRating from "../SliderRating/SliderRating";


const Form = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState([0, 85000]);
    const [valueRating, setValueRating] = useState([0, 5]);


    const submit = (e) => {
        const box = document.getElementsByClassName('checkbox');
        for (let i = 0; i < box.length; i++) {
            if (box[i].checked) {
                box[i].checked = !box[i].checked;
            }
        }

        setValue([0, 85000]);
        setValueRating([0, 5]);
        navigate(`/`);
    };


    return (
        <div className={'formWrapper'}>

            <div className={'formWrapper-sliderPrice marginBottom'}>
                <h3>Search Price</h3>
                <SliderPrice
                    value={value}
                    setValue={setValue}
                />
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
                <SliderRating valueRating={valueRating} setValueRating={setValueRating}/>
            </div>

            <button className={'form-btn'} onClick={e => submit(e)}>clear all filters</button>
        </div>
    );
};
export default Form;

