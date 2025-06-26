import React from 'react';

import Banner from '../../components/banner/Banner';
import { useLoaderData } from 'react-router';
import FeaturedTasks from '../../components/featuredTasks/FeaturedTasks';
import SuccessStory from '../../components/successStory/SuccessStory';
import Services from '../../components/services/Services';
import { Helmet } from 'react-helmet-async';
import CallToAction from '../../components/callToAction/CallToAction';
import Blog from '../../components/blog/blog';
import Promotional from '../../components/promotional/Promotional';
const Home = () => {

    const tasksData = useLoaderData();
    
  
    return (
        <div className=''>
            <Helmet>
                <title>freelance MarketPlace || Home</title>
            </Helmet>
            <Banner/>
            <FeaturedTasks tasksData={tasksData}/>
            <CallToAction></CallToAction>
            <SuccessStory/>
            <Promotional></Promotional>
            <Services/>
            <Blog></Blog>
          
        </div>
    );
};

export default Home;