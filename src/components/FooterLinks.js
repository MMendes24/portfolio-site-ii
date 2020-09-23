import React from 'react'

import { FooterStyled as Footer } from '../styles'

//IMAGES FOR LINKS
import Github from '../assets/Github_5.png'
import Twitter from '../assets/Twitter_5.png'
import Linkedin from '../assets/Linkedin_5.png'

const FooterLinks = () => {
    return (
        <Footer>
            <a className="social-link" href="https://github.com/MMendes24">
                <img alt="link to Mars' Mendes Github" src={Github} />
            </a>
            <a className="social-link"  href="https://twitter.com/MarsMendes2">
                <img alt="link to Mars' Mendes Twitter" src={Twitter} />
            </a>
            <a className="social-link"  href="https://www.linkedin.com/in/marsdmendes/">
                <img alt="link to Mars' Mendes linkedin" src={Linkedin} />
            </a>

        </Footer>
    )
}

export default FooterLinks