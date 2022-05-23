import React from 'react';

import cartImg from '../../images/cartImg.png';
import './HeaderStyle.css';

const Header = () => {
    return (
        <div className={'header'}>
            <p>Online store</p>
            <button>
                <img src={cartImg} alt="foto"/>
                CART
            </button>

        </div>
    );
};

export default Header;