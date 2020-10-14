import React from 'react';

import Intro from './Intro'
import About from './About'
import Experience from './Experience/Experience';
import ExperienceContent from './Experience/ExperienceContent';
import Projects from './Projects/Projects';
import ProjectsContent from './Projects/ProjectsContent';
import Contact from './Contact';

const HomePage = () => (
    <>
    <Intro />
    <div id="page-body">
        <About />
        <Experience experienceProfiles={ExperienceContent}/>
        <Projects projectProfiles={ProjectsContent}/>
    </div>
        <Contact />
    </>
);

export default HomePage;