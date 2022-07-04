import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setTools(data))
    }, [])
    const threeProducts = tools.slice(0, 3);
    return (
        <div>
            <h1 className='text-center text-4xl font-bold underline'>Featured Tools</h1>
            <p className='text-center text-xl font-medium my-3 text-secondary'>Super fresh condition</p>

            <div className='items-center grid grid-cols-3 gap-4 p-12'>
                {
                    threeProducts.map(tool => <Tool key={tool._id} tools={tool}></Tool>)
                }

                    <h1 className=''><Link to={"/allTools"} className="mx-auto text-xl font-semibold">Show more tools <span className='text-primary'>➡</span></Link></h1>

            </div>

        </div>

    );
};

export default Tools;