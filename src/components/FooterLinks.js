import React from 'react'

import { FooterStyled as Footer } from '../styles'

const FooterLinks = () => {
    return (
        <Footer>
            <div className="footer-div">
                <a className="social-link" href="https://github.com/MMendes24">
                    <i class="fab fa-github-square"></i>
                </a>

                <a className="social-link" href="https://twitter.com/MarsMendes2">
                    <i class="fab fa-twitter-square" ></i>
                </a>

                <a className="social-link" href="https://www.linkedin.com/in/marsdmendes/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
            <p className="about-p">mdmbusiness2@gmail.com</p>
        </Footer>
    )
}

export default FooterLinks