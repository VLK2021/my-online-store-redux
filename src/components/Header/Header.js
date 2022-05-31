import React from 'react';

import cartImg from '../../images/cartImg.png';
import './HeaderStyle.css';

const Header = () => {

    const showCart = () => {
        const popUp = document.getElementById('popUp');
        if (popUp.style.display === 'block') {
            popUp.style.display = 'none';
        } else {
            popUp.style.display = 'block';
        }
    }

    const closePopUp = () => {
        const popUp = document.getElementById('popUp');
        popUp.style.display = 'none';
    }

    return (
        <div className={'header'}>
            <p>Online store</p>

            <button onClick={() => showCart()}>
                <img src={cartImg} alt="foto"/>
                CART
            </button>

            <div id={'popUp'}>
                <div className={'close'} onClick={() => closePopUp()}>

                </div>
            </div>

        </div>
    );
};

export default Header;