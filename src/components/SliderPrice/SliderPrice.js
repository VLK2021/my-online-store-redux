import React from 'react';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './SliderPriceStyle.css';
import {getSearchProducts, getTotalSearch} from "../../store";


const SliderPrice = ({value, setValue}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const page = 1;
    const handleChange = (_, value) => {
        setValue(value)
    }
//https://online-store.bootcamp.place/api/products

    const urlPriseSave = location.pathname.replace('/', '')

    const getLoad = (e) => {
        const priseUrl = `price_gte=${value[0]}&price_lte=${value[1]}&`;
        const params = {
            price_gte: value[0],
            price_lte: value[1],
        }

        const word = priseUrl;

        navigate(`${word}`)
        dispatch(getTotalSearch({word, page}));
        dispatch(getSearchProducts({word, page}));
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
