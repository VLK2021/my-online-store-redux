import React from 'react';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './SliderPriceStyle.css';
import {getSearchProducts, getTotalSearch} from "../../store";
// import {getTotalPagesPrice, getValuePrice} from "../../store";


const SliderPrice = ({value, setValue}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const page = 1;
    const handleChange = (_, value) => {
        setValue(value)
    }

    // const getLoad = (e) => {
    //     const url = location.pathname.replace('/', '').replace('wqs', '');
    //     const price_gte = value[0];
    //     const price_lte = value[1];
    //
    //     dispatch(getValuePrice({url, page, price_gte, price_lte}));
    //     dispatch(getTotalPagesPrice({url, page, price_gte, price_lte}));
    //     navigate(`/wqs`);
    // }

    // console.log(location);


    const getLoad = (e) => {
        const url = location.pathname.replace('/', '');

        if (!location.pathname.includes('price')) {
            const word = url + `price_gte=${value[0]}&price_lte=${value[1]}&`;

            navigate(`${word}`)
            dispatch(getTotalSearch({word, page}));
            dispatch(getSearchProducts({word, page}));
        } else {
            console.log(location.pathname);

            const arrPrice = location.pathname.split('price_gte=')

            const arrPriceLte = location.pathname.split('price_lte=');
            console.log('arrPriceLte', arrPriceLte);

            const indexAmpersantLte = arrPriceLte[1].indexOf('&');
            console.log('indexAmpersantLte', indexAmpersantLte);

            const newArrPriceSliceLte = arrPriceLte[1].slice(indexAmpersantLte);
            console.log('newArrPriceSliceLte', newArrPriceSliceLte);

            const wordLte = 'price_lte=' + value[1] + newArrPriceSliceLte;
            console.log(wordLte);


            const indexAmpersant = arrPrice[1].indexOf('&');
            const newArrPriceSlice = arrPrice[1].slice(indexAmpersant);

            const wordGte = 'price_gte=' + value[0] + newArrPriceSlice;
            console.log('wordGte', wordGte);


            // const word = arrPrice[0].replace('/', '') + 'price_gte=' + value[0] + newArrPriceSlice;

            // console.log(word);

            // navigate(`${word}`)
            // dispatch(getTotalSearch({word, page}));
            // dispatch(getSearchProducts({word, page}));
        }
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
