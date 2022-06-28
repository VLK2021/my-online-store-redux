import React, {useState} from 'react';
import Slider from "@material-ui/core/Slider";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getSearchProducts, getTotalSearch} from "../../store";
import './SliderRatingStyle.css';


const SliderRating = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState([0, 5]);

    const page = 1;
    const handleChange = (e, value) => {
        setValue(value);
    }

    const valuetext = (e) => `${value}`;

    const changeRating = (e) => {
        const minMaxArrRating = e.target.ariaValueText.replaceAll(',', ' ').split(' ')
        const currentMinMaxRating = `rating_gte=${minMaxArrRating[0]}&rating_lte=${minMaxArrRating[1]}`
        const word = pathname.replace('/', '').concat(`${currentMinMaxRating}&`.toLowerCase())
        navigate(`${word}`)
        dispatch(getTotalSearch({word, page}));
        dispatch(getSearchProducts({word, page}));
    }

    return (
        <div className={'sliderRating'}>
            <Slider
                className={'slidR'}
                min={0}
                max={5}
                step={0.01}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                onClick={changeRating}
            />

            <div className={'sliderRating-numbers'}>
                <div>{value[0]}</div>
                <div>{value[1]}</div>
            </div>
        </div>
    );
};
export default SliderRating;