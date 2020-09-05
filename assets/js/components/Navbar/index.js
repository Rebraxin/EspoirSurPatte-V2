import React from 'react'
import NavbarStyled from './NavbarStyled'

const Navbar = () => {
  return (
    <NavbarStyled>
      <a href="#">EspoirSurPattes</a>
      <ul>
        <li>Adoption</li>
        <li>News</li>
        <li>Association</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </NavbarStyled>
  )
}

export default Navbar
