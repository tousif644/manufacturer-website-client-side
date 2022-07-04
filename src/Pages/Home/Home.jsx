import React from 'react';
import Served from '../Served/Served';
import ServedCard from '../Served/ServedCard';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServedCard></ServedCard>
            <Tools></Tools>
        </div>
    );
};

export default Home;