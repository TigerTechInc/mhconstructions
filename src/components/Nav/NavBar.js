import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                Intro
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                Experience
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                Projects
                </Link>
            </li>
            <li>
                <a href={process.env.PUBLIC_URL + '/JayantMehtaResume.pdf'}  target="_blank">Resume</a>
            </li>
        </ul>
    </nav>
);

export default NavBar;