import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './SliderPriceStyle.css';
import {getSearchProducts, getTotalSearch} from "../../store";

const SliderPrice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    console.log(pathname);
    const [value, setValue] = useState([0, 85000]);

    const [urlPrice, setUrlPrice] = useState(pathname.replace('/', '').concat(`price_gte=${value[0]}&price_lte=${value[1]}&`));

    const page = 1;
    const handleChange = (e, value) => {
        console.log(value);
        setValue(value);
    }


    const valuetext = (e) => `${value}`;


    const minChange = (e) => {
        setUrlPrice(`price_gte=${value[0]}&price_lte=${value[1]}&`)
        // setUrlPrice(pathname.replace('/', '').concat(`price_gte=${value[0]}&price_lte=${value[1]}&`))
        // setUrlPrice(pathname.replace('/', ''));

        const word = `${urlPrice}`.toLowerCase();

        navigate(`${word}`)
        dispatch(getTotalSearch({word, page}));
        dispatch(getSearchProducts({word, page}));
    }

    return (
        <div className={'sliderPrice'}>
            <Slider
                className={'slid'}
                min={0}
                max={85000}

                onClick={minChange}

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