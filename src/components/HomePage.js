import React from 'react';

import Intro from './Intro'
import About from './About'
import Services from './Services/Services';
import ServicesContent from './Services/ServicesContent';
import Projects from './Projects/Projects';
import ProjectsContent from './Projects/ProjectsContent';
import Contact from './Contact';

const HomePage = () => (
    <>
    <Intro />
    <div id="page-body">
        <About />
        <Services serviceProfiles={ServicesContent}/>
        <Projects projectProfiles={ProjectsContent}/>
    </div>
        <Contact />
    </>
);

export default HomePage;