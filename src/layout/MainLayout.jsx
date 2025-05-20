import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
            <div className=" min-h-[calc(100vh-412px)]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;