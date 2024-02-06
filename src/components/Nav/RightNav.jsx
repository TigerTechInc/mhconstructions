import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Ul = styled.ul`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: rgb(58, 170, 204);
  } 

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 18px 10px;

    }
    a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
    <li>
        <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
        About Us
        </Link>
    </li>
    <li>
        <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
        Services
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
        <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
        Contact
        </Link>
    </li>
    </Ul>
  )
}

export default RightNav