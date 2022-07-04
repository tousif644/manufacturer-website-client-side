import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Misc/Loading';
import ShowAllTools from './ShowAllTools';

const AllTools = () => {
    // fetching data
    const { data: tools, isLoading } = useQuery('tools', () => fetch('../../../Public/data.json').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-center text-5xl  my-2 font-bold'>Our Tools</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 my-2 p-8'>
                {
                    tools.map(tool => <ShowAllTools key={tool._id} tools={tool}></ShowAllTools>)
                }
            </div>
        </div>
    );
};

export default AllTools;