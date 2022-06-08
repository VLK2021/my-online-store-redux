import React from 'react';

import './BrandStyle.css';


const Brand = ({bran}) => {

    const changeBrand = (e) => {
        e.preventDefault();
        const word = `&brand=${e.target.name}`;
        console.log(word);
    };


    return (
        <div className={'brand'}>
                <form className={'brandForm'} name={'brand'}>
                    <input className="checkbox" type="checkbox" name={bran} onChange={changeBrand}/> <label>{bran}</label>
                </form>
        </div>
    );
};
export default Brand;