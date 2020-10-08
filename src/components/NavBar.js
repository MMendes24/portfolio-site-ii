import React from 'react'
import { Link } from 'react-router-dom'

import { NavBarStyled as Nav } from '../styles'

const NavBar = () => {
    return (
        <Nav>
            <Link to="/" className="nav-header">
                <h2>Mars Mendes</h2>
            </Link>
            
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="" className="nav-link">Resume</Link>
        </Nav>
    )
}

export default NavBar