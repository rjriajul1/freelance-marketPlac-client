import React from 'react';

import Banner from '../../components/banner/Banner';
import { useLoaderData } from 'react-router';
import FeaturedTasks from '../../components/featuredTasks/FeaturedTasks';
import SuccessStory from '../../components/successStory/SuccessStory';
import Services from '../../components/services/Services';
import { Helmet } from 'react-helmet-async';
import CallToAction from '../../components/callToAction/CallToAction';
import Blog from '../../components/blog/blog';
const Home = () => {

    const tasksData = useLoaderData();
    
  
    return (
        <div className='max-w-[1600px] mx-auto'>
            <Helmet>
                <title>freelance MarketPlace || Home</title>
            </Helmet>
            <Banner/>
            <FeaturedTasks tasksData={tasksData}/>
            <SuccessStory/>
            <Services/>
            <CallToAction></CallToAction>
            <Blog></Blog>
          
        </div>
    );
};

export default Home;