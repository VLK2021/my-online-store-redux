import React from 'react';

import Header from "../Header/Header";
import Main from "../Main/Main";
import './LayoutStyle.css';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={'layout'}>
            <Header/>
            <Main/>
            <Outlet/>

        </div>
    );
};

export default Layout;