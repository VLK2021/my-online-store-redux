import React from 'react';

import './SearchStyle.css';

const Search = () => {
    return (
        <div className={'search'}>
            <form>
                <input className={'search-input'} type="text" placeholder={'Search'}/>
            </form>
        </div>
    );
};

export default Search;