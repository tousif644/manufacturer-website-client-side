import React from 'react';
import MyProjects from './MyProjects';

const ProjectsData = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:p-8">
            <MyProjects title="Khabar Dokan" description="This is a website about restaurant booking and Catering booking " webLink = "https://khabar-dokan-53fcf.web.app/"></MyProjects>
            <MyProjects title="MackBook Generation" description="A simple website built with api and authentication" webLink="https://iridescent-lollipop-102d1e.netlify.app/"></MyProjects>
            <MyProjects title="Doctor's Portal" description='This website is known as treatment website a fullstack website easy to interact' webLink="https://www.google.com"></MyProjects>
            <MyProjects title="Warehouse Management" description="A place where everyone manage their inventory they send their product and we keep them and sell them" webLink="https://warehouse-management-c58a2.web.app/"></MyProjects>
        </div>
    );
};

export default ProjectsData;