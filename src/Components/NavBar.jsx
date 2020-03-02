
import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
  if (props.currentUser.id === 0) {
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
      </ul>
    )
  } else {
    return(
      <ul className="nav">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.handleLogOut}>Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/">Fractal Machine</NavLink>
        </li>
      </ul>
    )
  }
};

export default NavBar;