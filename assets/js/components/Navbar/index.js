import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavbarStyled from './NavbarStyled';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to="/">
        <p href="#">EspoirSurPattes</p>
      </Link>
      <ul>
        <li>
          <NavLink to="/adoption">Adoption</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/association">Association</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
