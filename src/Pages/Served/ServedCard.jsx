import React from 'react';
import Served from './Served';
import FaFlag from "../../Images/flag-solid.svg";
import FaStar from "../../Images/star-solid.svg";
import Like from "../../Images/thumbs-up-solid.svg";
import Users from "../../Images/users-solid.svg";
const ServedCard = () => {
    return (
        <div className='text-center my-12'>
            <h1 className='text-5xl font-bold'>Millions Business Trust Us</h1>
            <p className='my-2 text-secondary'>USERS EXPECTATION</p>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  '>
                <Served title="32+ " icon={FaFlag} description="Countries"></Served>
                <Served title="346+ " icon={FaStar} description="Review"></Served>
                <Served title="250+ " icon={Like} description="Feedbacks"></Served>
                <Served title="460+ " icon={Users} description="Happy Clients"></Served>
            </div >
        </div>
    );
};

export default ServedCard;