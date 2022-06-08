import React from 'react';

import './LayoutStyle.css';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import Search from "../components/Search/Search";
import Form from "../components/Form/Form";


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

