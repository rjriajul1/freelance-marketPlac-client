import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;