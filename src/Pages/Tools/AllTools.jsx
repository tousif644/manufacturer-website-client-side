import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Misc/Loading';
import Footer from '../Shared/Footer';
import ShowAllTools from './ShowAllTools';

const AllTools = () => {
    // fetching data
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://equipo-fullstack-app.herokuapp.com/tools').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-center text-5xl  my-2 font-bold'>Our Tools</h1>
            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 my-2 p-8'>
                {
                    tools.map(tool => <ShowAllTools key={tool._id} tools={tool} refetch={refetch}></ShowAllTools>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default AllTools;