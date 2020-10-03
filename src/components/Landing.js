import React from 'react'

import { LandingSection as Section } from '../styles'

const Landing = () => {
    return (
        <Section>
            <h1><span className="color-span">Mars</span></h1>
            <p>I'm a <span className="color-span">full stack web developer.</span> Here you'll find my projects, my resume, and a mountain of evidence implicating me in your local coffee shortage.</p>
            <p>The app you're currently visiting is a <span className="color-span">single-page React app,</span> built to be semantic, functional, and easy on the eyes. It is styled with styled-components. If that's the sort of thing you're looking for, you've found your guy. If not, check out my resume and portfolio, you may see something else you like.</p>
            <p><span className="color-span">Please reach out</span> using the links below!</p>
            <p className="ps">(P.S. the color is <span className="color-span">"Martian Red"</span> if you were wondering.)</p>
        </Section>
    )
}

export default Landing