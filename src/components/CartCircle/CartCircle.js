import React from 'react';

import './CartCircleStele.css';

const CartCircle = ({length = 0}) => {

    return length > 0? (
        <div className={'cartCircle'}>
            {length}
        </div>
    ): null
};

export default CartCircle;