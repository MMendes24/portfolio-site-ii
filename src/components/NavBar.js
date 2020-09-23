import React from 'react'
import { Link } from 'react-router-dom'

import { NavBarStyled } from '../styles'

const NavBar = () => {
    return (
        <NavBarStyled>
            <Link to="" className="nav-link">About Me</Link>
            <Link to="" className="nav-link">Resume</Link>
            <Link to="" className="nav-link">Portfolio</Link>
        </NavBarStyled>
    )
}

export default NavBar