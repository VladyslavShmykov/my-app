import React from "react";
import Header from "../header/header";
import {Outlet} from "react-router-dom";

function Layout({links}) {
    return (
        <div>
            <Header links={links}/>

            <Outlet/>
        </div>
    );
}

export default Layout
