import React from 'react'

import { LandingSection as Section } from '../styles'

const Landing = () => {
    return (
        <Section>
                <h1><span className="color-span">Mars Mendes</span></h1>
                <p>I'm a <span className="color-span">full stack web developer.</span> Here you'll find my projects, my resume, and a mountain of evidence implicating me in your local coffee shortage.</p>
                <p>The app you're currently visiting is a <span className="color-span">single-page React app,</span> built to be semantic, functional, and easy on the eyes.</p>
                <p><span className="color-span">Please reach out</span> using the links below!</p>
                <p className="ps">(P.S. the color is <span className="color-span">"Martian Red"</span> if you were wondering.)</p>
        </Section>

    )
}

export default Landing