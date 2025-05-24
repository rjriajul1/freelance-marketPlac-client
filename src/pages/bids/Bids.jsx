import React from 'react';
import {  useLoaderData, useNavigate } from 'react-router';

const Bids = () => {
    const task = useLoaderData()
    const navigate = useNavigate();
   
    return (
        <div className='flex justify-between '>
            <div></div>
            <div className='border mr-5 w-44 p-6 bg-green-500'>
                 
                  <p className='text-xl'> bids: {task.bids || 0}</p>
                  <button className='btn mt-4' onClick={()=>navigate(-1)}>Go To Back</button>
            </div>
        </div>
    );
};

export default Bids;