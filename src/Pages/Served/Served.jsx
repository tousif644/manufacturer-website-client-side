import React from 'react';

const Served = ({ title ,icon,description}) => {
    return (
        <div className='p-12'>
            <div class="hero">
                <div class="card card-side  p-2">
                    <img className='fill-orange-500' src={icon} alt=""width={50} height={50} />
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-center">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Served;