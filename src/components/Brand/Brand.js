import React from 'react';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import './BrandStyle.css';
import {getSearchProducts, getTotalSearch} from "../../store";


const Brand = ({bran}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    const page = 1;

    const changeBrand = (e) => {
        if (e.target.checked === true) {
            const word = pathname.replace('/', '').concat(`brand=${e.target.name}&`.toLowerCase());
            dispatch(getTotalSearch({word, page}));
            dispatch(getSearchProducts({word, page}));
            navigate(`${word}`)
        } else {
            const word = pathname.replace(`brand=${e.target.name}&`.toLowerCase(), '').replace('/', '')
            dispatch(getTotalSearch({word, page}));
            dispatch(getSearchProducts({word, page}));
            navigate(`${word}`)
        }
    };

    return (
        <div className={'brand'}>
            <form className={'brandForm'} name={'brand'}>
                <input
                    className="checkbox"
                    type="checkbox"
                    name={bran.replace(' ', "_")}
                    onInput={changeBrand}
                />
                <label>{bran}</label>
            </form>
        </div>
    );
};
export default Brand;