import React from 'react';
import { Link } from "react-router-dom"
import {Bounce, LightSpeed} from 'react-reveal';
const Intro = () => {
    return (
        <div>
            <div class=" flex flex-col h-screen justify-center items-center">
                <Bounce left cascade>
                    <div className="lg:text-7xl p-2 text-3xl">Welcome to EQUIPO</div>
                </Bounce>
                <div className="text-3xl p-2">
                    <Bounce left>
                        <Link to="/home" className='btn btn-secondary text-white'>Click me to forward</Link>

                    </Bounce>
                </div>
            </div>

        </div>
    );
};

export default Intro;