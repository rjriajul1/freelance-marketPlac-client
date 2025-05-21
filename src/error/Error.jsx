import React from 'react';
import errorImg from '../assets/404.gif'
import { Link } from 'react-router';
const Error = () => {
    return (
        <div>
            <div className='mt-10'>
                <img className='mx-auto w-96' src={errorImg} alt="" />
               <div className='text-center space-y-3'>
                 <h1 className='text-4xl text-red-500'>Oops! Page not found</h1>
                <p className='text-gray-500 font-bold text-xs'> The page you're looking for doesn't exist or has been moved.</p>
                <Link to='/'><button className='btn btn-success text-white'>Go Back Home</button></Link>
               </div>
            </div>
        </div>
    );
};

export default Error;