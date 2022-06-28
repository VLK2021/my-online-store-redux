// import React, {useState} from 'react';
// import Slider from '@material-ui/core/Slider';
// import {useDispatch} from "react-redux";
// import {useLocation, useNavigate} from "react-router-dom";
// import './SliderPriceStyle.css';
// import {getSearchProducts, getTotalSearch} from "../../store";
// import {useSearchParams} from 'react-router-dom';
//
// const SliderPrice = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [searchParams, setSearchParams] = useSearchParams();
//
//     const [value, setValue] = useState([+searchParams.get('price_gte') || 0, +searchParams.get('price_gte') || 85000]);
//     // const [flag, setFlag] = useState(false);
//     // console.log(searchParams.get('price_gte'));
//     const urlDef = location.pathname.replace('/', '').concat(`price_gte=${value[0]}&price_lte=${value[1]}&`);
//     const [urlPrice, setUrlPrice] = useState(urlDef);
//     const page = 1;
//     const handleChange = (_, value) => {
//         setValue(value)
//     }
//
// const getLoad = () => {
//     console.log(searchParams)
//             const params = {
//                 ...searchParams,
//                 price_gte: value[0],
//                 price_lte: value[1],
//             };
//             setSearchParams(params);
//     }
//     const valuetext = (e) => `${value}`;
//     // const query = new URLSearchParams(useLocation().search);
//     // console.log(query);
//     // const minChange = (e) => {
//     //     // console.log(e.target);
//     //
//     //     const urlPriceNew = `price_gte=${value[0]}&price_lte=${value[1]}&`;
//     //     console.log('urlPriceNew',urlPriceNew);
//     //
//     //     const urlOld = location.pathname.replace('/', '');
//     //     console.log('urlOld',urlOld);
//     //
//     //     setUrlPrice(urlOld.concat(urlPriceNew));
//     //
//     //     const word = `${urlPrice}`.toLowerCase();
//     //     console.log('word',word);
//     //
//     //     <hr/>
//     //
//     //     navigate(`${word}`)
//     //     dispatch(getTotalSearch({word, page}));
//     //     dispatch(getSearchProducts({word, page}));
//     // }
//
//     return (
//         <div className={'sliderPrice'}>
//             <Slider
//                 className={'slid sliderPrice'}
//                 min={0}
//                 max={85000}
//
//                 // onClick={minChange}
//                 onMouseUp={getLoad}
//                 value={value}
//                 onChange={handleChange}
//                 valueLabelDisplay="auto"
//                 aria-labelledby="range-slider"
//                 getAriaValueText={valuetext}
//             />
//             <div className={'sliderPrice-numbers'}>
//                 <div>{`${value[0]} ua`}</div>
//                 <div>{`${value[1]} ua`}</div>
//             </div>
//         </div>
//     );
// };
// export default SliderPrice;
//=================================================================================================================



import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './SliderPriceStyle.css';
import {getSearchProducts, getTotalSearch} from "../../store";


const SliderPrice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState([0, 85000]);

    const urlDef = location.pathname.replace('/', '').concat(`price_gte=${value[0]}&price_lte=${value[1]}&`);
    const [urlPrice, setUrlPrice] = useState(urlDef);

    const page = 1;
    const handleChange = (e, value) => {
        setValue(value);
    }

    const valuetext = (e) => `${value}`;

    const minChange = (e) => {
        const urlPriceNew = `price_gte=${value[0]}&price_lte=${value[1]}&`;
        // const urlOld = location.pathname.replace('/', '');
        // setUrlPrice(urlOld.concat(urlPriceNew));
        setUrlPrice(urlPriceNew);

        const word = `${urlPrice}`.toLowerCase();
        navigate(`${word}`)
        dispatch(getTotalSearch({word, page}));
        dispatch(getSearchProducts({word, page}));
    }

    return (
        <div className={'sliderPrice'}>
            <Slider
                className={'slid sliderPrice'}
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