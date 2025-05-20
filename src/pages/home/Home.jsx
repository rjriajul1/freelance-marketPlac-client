import React from 'react';
import Banner from '../../components/banner/Banner';
import { useLoaderData } from 'react-router';
import FeaturedTasks from '../../components/featuredTasks/FeaturedTasks';
const Home = () => {

    const tasksData = useLoaderData();
    
  
    return (
        <div>
            <Banner/>
            <FeaturedTasks tasksData={tasksData}/>
          
        </div>
    );
};

export default Home;