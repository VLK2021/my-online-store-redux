import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';

import './SliderPriceStyle.css';

const SliderPrice = () => {

    const [value, setValue] = useState([0, 1000000]);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    const valuetext = (e) => {

    }


    return (
        <div className={'sliderPrice'}>

            <Slider
                className={'slid'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />

            {/*<div className="wrapper-slider_block">*/}
            {/*    <input type="range" min="0" max="10000000" step="1" value="100" className="slider"/>*/}
            {/*</div>*/}
        </div>
    );
};

export default SliderPrice;