import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

import { Link } from 'react-scroll';


const Nav = styled.nav`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 4px solid black;
  padding: 0 20px;
  display: flex;
  background-color: black;
  font-weight: bold;

  
  .logo {
    padding: 15px 0;
    color: white;
  }
  .options {
    justify-content: center;
  }

  a {
    color: white;
    cursor:pointer;
    padding: 12px;
    text-decoration: none;
  }
  a:hover {
    color: rgb(58, 170, 204);
  } 

`


const Navbar = () => {
  return (
    <Nav>
      <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
      MH Concrete
      </Link>
      <div className="options">
        <Burger />
      </div>
    </Nav>
  )
}

export default Navbar