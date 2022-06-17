import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import './BrandStyle.css';
import {getSearchProducts} from "../../store";


const Brand = ({bran}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    const page = 1;

    const changeBrand = (e) => {
        e.preventDefault();
        const word = pathname.replace('/', '').concat(`brand=${e.target.name}&`.toLowerCase());
        navigate(`${word}`)
        dispatch(getSearchProducts({word, page}));
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