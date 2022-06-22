import React from 'react';
import {Link} from "react-router-dom" 
const Intro = () => {
    return (
        <div>
            <h1 className='text-5xl'>Hello There this is an Intro Page</h1>
            <Link to="/home" className='text-3xl '> Home ➡</Link>
        </div>
    );
};

export default Intro;