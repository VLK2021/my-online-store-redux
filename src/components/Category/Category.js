import React from 'react';

import './CategoryStyle.css';


const Category = ({cat}) => {

    const changeCategories = (e) => {

    }

    return (
        <div className={'category'}>
            <form name={'categories'}>
                <input className="checkbox" type="checkbox" name={cat} onChange={changeCategories}/> <label>{cat}</label>
            </form>
        </div>
    );
};

export default Category;