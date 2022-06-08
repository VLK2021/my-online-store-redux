import React from 'react';
import {Link} from "react-router-dom";

import CartBlock from "../CartBlock/CartBlock";
import './HeaderStyle.css';

const Header = () => {

    // fetch('http://online-store.bootcamp.place/api/brands')
    //     .then(response => response.json())
    //     .then(value => console.log(value))

    // fetch('http://online-store.bootcamp.place/api/categories')
    //     .then(response => response.json())
    //     .then(value => console.log(value))


    return (
        <div className={'header'}>
            <Link to={'/'} className={'header-text'}>Online store</Link>

            <div className={'header-cartBtn'}>
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;