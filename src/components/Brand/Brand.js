import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import './BrandStyle.css';
import {getSearchProducts} from "../../store";


const Brand = ({bran}) => {
    const page = 1;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeBrand = (e) => {
        e.preventDefault();
        const word = `brand=${e.target.name}`.toLowerCase();
        navigate(`/${word}`)
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