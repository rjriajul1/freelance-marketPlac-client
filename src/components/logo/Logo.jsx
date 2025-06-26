import React from 'react';
 import logo from "../../assets/logo.png";
const Logo = () => {
    return (
        <div>
            <img className='w-30 h-30 object-cover rounded-full' src={logo} alt="" />
        </div>
    );
};

export default Logo;