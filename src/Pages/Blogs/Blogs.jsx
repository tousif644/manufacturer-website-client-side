import React from 'react';
// bgCard: "#000000",
// headerColor: "#1A4D2E",
// descColor: "#FF9F29",
// learnColor : "#FAF3E3",
const Blogs = ({ title, description,img }) => {
    return (
        <div className=''>
            <div class="card  rounded-md w-auto shadow-xl bg-[#000000]">
                <div class="card-body">
                    <h2 class="card-title text-[#019267]">{title}</h2>
                    <p className='text-[#FF9F29] text-sm'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;