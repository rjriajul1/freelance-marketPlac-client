import React, { useEffect, useState } from 'react';
import Story from '../story/Story';


const SuccessStory = () => {
    const [stories,setStories] = useState([]);
    useEffect(()=>{
        fetch('/stories.json')
        .then(res=>res.json())
        .then(data=>setStories(data))
    },[])
   
    return (

        <div className='max-w-7xl mx-auto py-6'>

             <h1 className='text-3xl font-bold'>Success Story</h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
               {stories?.map(story=><Story key={story.id} story={story}></Story>)}
             </div>
        </div>
    );
};

export default SuccessStory;