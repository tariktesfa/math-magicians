import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav data-testid="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/calculator"
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/quote"
        >
          Quotes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
