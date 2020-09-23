import React from 'react'
import { Link } from 'react-router-dom'

import { FooterStyled } from '../styles'
import Github from '../assets/Github_5.png'
import Twitter from '../assets/Twitter_5.png'
import Linkedin from '../assets/Linkedin_5.png'

const Footer = () => {
    return (
        <FooterStyled>
            <img className="social-link" alt="link to Mars' Mendes Github" src={Github} />
            <img className="social-link" alt="link to Mars' Mendes Twitter" src={Twitter} />
            <img className="social-link" alt="link to Mars' Mendes linkedin" src={Linkedin} />
        </FooterStyled>
    )
}

export default Footer