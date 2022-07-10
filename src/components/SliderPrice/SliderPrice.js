import React from 'react';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './SliderPriceStyle.css';
import {getValuePrice} from "../../store/slices/price.slice";
// import {getSearchProducts, getTotalSearch} from "../../store";


const SliderPrice = ({value, setValue, searchParams, setSearchParams}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const page = 1;
    const handleChange = (_, value) => {
        setValue(value)
    }
//https://online-store.bootcamp.place/api/products

    const getLoad = (e) => {
        const url = location.pathname.replace('/', '');
        const price_gte = value[0];
        const price_lte = value[1];

        dispatch(getValuePrice({url, page, price_gte, price_lte}));




        // const params = {
        //     ...searchParams,
        //     price_gte: value[0],
        //     price_lte: value[1],
        // }
        // setSearchParams(params);
        // if(!location.pathname.includes('price')) {
        //     const word = `price_gte=${value[0]}&price_lte=${value[1]}&`;
        //     dispatch(getTotalSearch({word, page}));
        //     dispatch(getSearchProducts({word, page}));
        //     navigate(`${word}`);
        // } else {
        //     const params = {
        //             ...searchParams,
        //             price_gte: value[0],
        //             price_lte: value[1],
        //         }
        //         setSearchParams(params);
        //     const word = (location.pathname + location.search).replaceAll('?', '');
        //     dispatch(getTotalSearch({word, page}));
        //     dispatch(getSearchProducts({word, page}));
        //     // navigate(`${word}`);
        // }
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
