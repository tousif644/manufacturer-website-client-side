import React from 'react';
import Served from '../Served/Served';
import ServedCard from '../Served/ServedCard';
import Footer from '../Shared/Footer';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServedCard></ServedCard>
            <Tools></Tools>
            <Footer />
        </div>
    );
};

export default Home;