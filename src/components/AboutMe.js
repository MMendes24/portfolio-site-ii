import React from 'react'

import { AboutMeSection } from '../styles'

const AboutMe = () => {
    return(
        <AboutMeSection>
            <h2 className="about-header">Oh, <span className="color-span">Me?</span></h2>

            <p className="about-p">I love to work with <span className="color-span">React</span> but I'm open to falling in love with other frameworks. I've <span className="color-span">worked in back-end,</span> too, and I would be hard pressed to pick between it and front-end development if the choice was equal. I expect to work in one or the other for the rest of my life, if not both. If you want more information on that aspect of me though, my <span className="color-span">resume</span> might be more your thing.</p>

            <p className="about-p">I'm originally from <span className="color-span">New Orleans</span> and I'm back on the <span className="color-span">Gulf Coast</span> as of 2019. I <span className="color-span">make music</span>. I like indie and love <span className="color-span">bright colors.</span> I prefer PF2 to D&D 5e. Cakewalk is my favorite DAW. I prefer <span className="color-span">rum</span> to whiskey (if you're looking to bribe me with anything other than job offers.)</p>

            <p className="about-p">I am happily married and love my wife and our two cats very much. It would be impossible to devote so much to what I do without them. Together we've gone to Virginia, California, New York, North Carolina, Louisiana, Mississippi, Pennsylvannia, and <span className="color-span">more,</span> sometimes to visit and sometimes to live. I can <span className="color-span">relocate anywhere as needed.</span></p>
        </AboutMeSection>
    )
}

export default AboutMe
