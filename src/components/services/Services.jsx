import React, { useEffect, useState } from 'react';
import Serve from '../serve/Serve';

const Services = () => {
    const [service,setService] = useState([])
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    
    return (
        <div className='service-section'>
            <div className='max-w-7xl mx-auto py-6'>
             <h1 className='text-3xl font-bold'>Top Rated Services</h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
               {service?.map(serve=><Serve key={serve.id} serve={serve}></Serve>)}
             </div>
        </div>
        </div>
    );
};

export default Services;