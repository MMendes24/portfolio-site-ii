import React from 'react'

import { LandingStyled } from '../styles'

const Landing = () => {
    return (
        <LandingStyled>
            <h1>Hey, <br></br>I'm <span className="color-span">Mars!</span></h1>
            <p>...and I'm a <span className="color-span">web developer.</span> Here you'll find my projects, my resume, and a mountain of evidence implementing me in your local coffee shortage.</p>
            <p>If you like what you see, <span className="color-span">feel free to reach out!</span></p>
            <p className="ps">(P.S. the color is <span className="color-span">"Martian Red"</span> if you were wondering.)</p>
        </LandingStyled>
    )
}

export default Landing