import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from '../styles'

const NavBar = () => {
    return (
        <Nav>
            <h2>Mars Mendes:</h2>
            <Link to="" className="nav-link">About Me</Link>
            <Link to="" className="nav-link">Resume</Link>
            <Link to="" className="nav-link">Portfolio</Link>
        </Nav>
    )
}

export default NavBar