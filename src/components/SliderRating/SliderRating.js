import React from 'react';
import Slider from "@material-ui/core/Slider";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getSearchProducts, getTotalSearch} from "../../store";
import './SliderRatingStyle.css';


const SliderRating = ({valueRating, setValueRating}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const page = 1;
    const handleChange = (e, valueRating) => {
        setValueRating(valueRating);
    }

    const valuetext = (e) => `${valueRating}`;

    const changeRating = (e) => {
        const url = location.pathname.replace('/', '');

        if (!location.pathname.includes('rating')) {
            const word = url + `rating_gte=${valueRating[0]}&rating_lte=${valueRating[1]}&`

            navigate(`${word}`)
            dispatch(getTotalSearch({word, page}));
            dispatch(getSearchProducts({word, page}));
        } else {
            const arrRating = location.pathname.split('rating_gte=');
            const indexAmp = arrRating[1].indexOf('&');
            const newArrRatingSlice = arrRating[1].slice(indexAmp);
            const wordGte = 'rating_gte=' + valueRating[0] + newArrRatingSlice;

            const arrRatingLte = wordGte.split('rating_lte=');
            const indexAmpLte = arrRatingLte[1].indexOf('&');
            const newArrRatingSliceLte = arrRatingLte[1].slice(indexAmpLte);
            const word = arrRating[0].replace('/', '') + arrRatingLte[0] + 'rating_lte=' + valueRating[1] + newArrRatingSliceLte;

            navigate(`${word}`);
            dispatch(getTotalSearch({word, page}));
            dispatch(getSearchProducts({word, page}));
        }
    }

    return (
        <div className={'sliderRating'}>
            <Slider
                className={'slidR'}
                min={0}
                max={5}
                step={0.01}
                value={valueRating}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                onClick={changeRating}
            />

            <div className={'sliderRating-numbers'}>
                <div>{valueRating[0]}</div>
                <div>{valueRating[1]}</div>
            </div>
        </div>
    );
};
export default SliderRating;