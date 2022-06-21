import React from 'react';

import './CartCircleStele.css';

const CartCircle = ({arr}) => {
    const count = arr.reduce((p, c) => p + c.count, 0);

    return count > 0? (
        <div className={'cartCircle'}>
            {count}
        </div>
    ): null
};

export default CartCircle;
