import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './SliderPriceStyle.css';
// import {getSearchProducts, getTotalSearch} from "../../store";


const SliderPrice = ({value, setValue}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();



    const page = 1;
    const handleChange = (_, value) => {
        setValue(value)
    }

    const getLoad = (e) => {

    }

    const valuetext = (e) => `${value}`;


    return (
        <div className={'sliderPrice'}>
            <Slider
                className={'slid sliderPrice'}
                min={0}
                max={85000}
                onMouseUp={getLoad}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />

            <div className={'sliderPrice-numbers'}>
                <div>{`${value[0]} ua`}</div>
                <div>{`${value[1]} ua`}</div>
            </div>
        </div>
    );
};
export default SliderPrice;
