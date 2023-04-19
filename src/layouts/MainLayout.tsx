// static parent component for react-router using for big dip routers with childrens:
import React from 'react';
import {Header} from "../components";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
    return (
        <div className="wrapper">
          <Header />
          <div className="content">
            <Outlet/>
          </div>
        </div >
    )

};

export default MainLayout;