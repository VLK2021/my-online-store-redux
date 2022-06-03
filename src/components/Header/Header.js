import React from 'react';
import {Link} from "react-router-dom";

import CartBlock from "../CartBlock/CartBlock";
import './HeaderStyle.css';

const Header = () => {

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