
import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/">Fractal Machine</NavLink>
      </li>

      {/* Uncomment this when profile page is ready to be rendered to the DOM */}
      {/* <li>
        <NavLink to="/profile">Profile</NavLink>
      </li> */}

    </ul>
  )
};

export default NavBar;