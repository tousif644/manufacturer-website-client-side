import React from 'react';
const Tool = ({ tools }) => {
    const { price, name, image } = tools;
    return (
        <div >
            <div class="card w-4/5 mx-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="tools-image" width={300} /></figure>
                <div class="card-body">
                    <h2 class="card-title text-md">
                        {name}
                        <div class="badge badge-secondary text-white">NEW</div>
                    </h2>
                    <p className=''>Price : <span className='text-secondary font-bold'>{price}</span></p>
                    <div class="card-actions">
                        <div class="badge badge-outline bg-primary text-white">Power tools</div>
                        <div class="badge badge-outline bg-secondary text-white">Unique Products</div>
                    </div>
                </div>
                    <button className='px-5 btn btn-primary rounded-none text-white'>Buy</button>
            </div>
        </div>
    );
};

export default Tool;