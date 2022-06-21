import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './SliderPriceStyle.css';
import {getSearchProducts} from "../../store";

const SliderPrice = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState([0, 85000]);
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const page = 1;
    const handleChange = (e, value) => {
        setValue(value);
    }

    const valuetext = (e) => `${value}`;

    const minChange = (e) => {
        const minMaxArr = e.target.ariaValueText.replaceAll(',', ' ').split(' ')
        const currentMinMax = `price_gte=${minMaxArr[0]}&price_lte=${minMaxArr[1]}`
        const word = pathname.replace('/', '').concat(`${currentMinMax}&`.toLowerCase())
        navigate(`${word}`)
        dispatch(getSearchProducts({word, page}))
    }

    return (
        <div className={'sliderPrice'}>
            <Slider
                className={'slid'}
                min={0}
                max={85000}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                onClick={minChange}
            />
            <div className={'sliderPrice-numbers'}>
                <div>{`${value[0]} ua`}</div>
                <div>{`${value[1]} ua`}</div>
            </div>
        </div>
    );
};
export default SliderPrice;