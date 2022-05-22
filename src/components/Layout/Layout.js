import React from 'react';

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import './LayoutStyle.css';
import {Outlet} from "react-router-dom";
import Search from "../Search/Search";

const Layout = () => {
    return (
        <div className={'layout'}>
            <Header/>

            <div className={'layout-main'}>
                <div className={'layout-sidebar'}><SideBar/></div>
                <div className={'layout-outlet'}>
                    <Search/>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default Layout;

