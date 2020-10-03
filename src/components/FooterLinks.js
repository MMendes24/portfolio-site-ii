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
                <i class="fab fa-github-square"></i>
            </a>
            <a className="social-link"  href="https://twitter.com/MarsMendes2">
                <i class="fab fa-twitter-square" ></i>
            </a>
            <a className="social-link"  href="https://www.linkedin.com/in/marsdmendes/">
                <i class="fab fa-linkedin"></i>
            </a>
            

        </Footer>
    )
}

export default FooterLinks