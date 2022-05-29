import React from 'react';

import Header from "../Header/Header";
import './LayoutStyle.css';
import {Outlet} from "react-router-dom";
import Search from "../Search/Search";
import Form from "../Form/Form";



const Layout = () => {
    return (
        <div className={'layout'}>
            <Header/>

            <div className={'layout-main'}>
                <div className={'layout-sidebar'}>
                   <Form/>
                </div>

                <div className={'layout-outlet'}>
                    <Search/>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default Layout;

