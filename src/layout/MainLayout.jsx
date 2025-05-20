import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';

const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default MainLayout;