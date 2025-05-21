import React from 'react';
import Banner from '../../components/banner/Banner';
import { useLoaderData } from 'react-router';
import FeaturedTasks from '../../components/featuredTasks/FeaturedTasks';
import SuccessStory from '../../components/successStory/SuccessStory';
const Home = () => {

    const tasksData = useLoaderData();
    
  
    return (
        <div>
            <Banner/>
            <FeaturedTasks tasksData={tasksData}/>
            <SuccessStory/>
          
        </div>
    );
};

export default Home;