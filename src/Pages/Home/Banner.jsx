import React from 'react';
import HeroImage from "../../Images/tim-foster-JdWU1Y7FS8g-unsplash.jpg"
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">

                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={HeroImage} class="lg:max-w-lg md:maw-w-md sm:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">New tools for your modern Problems</h1>
                        <p class="py-6">We are best at Tools in short span of time. People trust us and we trust them. This is the work culture of our firm. We take care that our work is carried out in much prompt manner.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;