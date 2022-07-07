import React from 'react';
import github from "../../Images/github-svgrepo-com.svg";
import facebook from "../../Images/facebook-svgrepo-com.svg";
import twitter from "../../Images/twitter-svgrepo-com.svg"
import linkedin from "../../Images/linkedin-linked-in-svgrepo-com.svg"
import ProjectsData from './ProjectsData';
import Footer from '../Shared/Footer';
const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content gap-12 flex-col lg:flex-row">
                    <img src="https://i.ibb.co/BV9XHMq/291627585-176236448136575-4425059138962601578-n-1.png" class=" rounded-lg shadow-2xl" width={550} />
                    <div>
                        <h1 className='text-xl badge badge-secondary p-3'>Hello</h1>
                        <h1 class="text-5xl font-bold my-2">I am S.M Tousif Tasrik</h1>
                        <p class="py-6 text-md">I have started my programing Jounery on 2019 now i am know a lot. Programming Hero community helps me to acheive my Goal. Now i am a Junior Front End Developer with a lot's of skills. </p>
                        <div className='flex gap-5 grayscale mb-4'>
                            <a href="https://github.com/tousif644"><img src={github} alt="" width={30} /></a>
                            <a href="https://www.facebook.com/tousif.tasrik"><img src={facebook} alt="" width={30} /></a>
                            <a href="https://twitter.com/TousifTasrik"><img src={twitter} alt="" width={30} /></a>
                            <a href="#"><img src={linkedin} alt="" width={30} /></a>
                        </div>
                        <button class="btn btn-primary text-white capitalize"> ✔ Hire me </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <h1 className='text-center text-4xl underline my-4'>My Skills as a Front End Developer</h1>
            <div className="grid grid-cols-7 items-center p-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="" width={50} className="grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" width={50} className="grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" width={50} className="grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" width={50} className="grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="" width={50} className="grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" width={150} className="grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb.png" alt="" width={150} className="grayscale hover:grayscale-0" />
            </div>
            <div>
                <h1 className='text-5xl underline text-center'>My Projects</h1>
                <ProjectsData></ProjectsData>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;