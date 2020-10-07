import React from 'react'

import { FooterStyled as Footer } from '../styles'

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