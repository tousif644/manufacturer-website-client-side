import React from 'react';
import Served from '../Served/Served';
import ServedCard from '../Served/ServedCard';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServedCard></ServedCard>
        </div>
    );
};

export default Home;