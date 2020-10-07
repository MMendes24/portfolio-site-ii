import React from 'react'
import profile from '../assets/profile.jpg'

import { AboutMeSection } from '../styles'

const AboutMe = () => {
    return (
        <AboutMeSection>
            <div className="landing-div">
                <h2 className="about-header">Oh, <span className="color-span">me?</span></h2>

                <p className="about-p" My>I love to work with <span className="color-span">React</span> but I'm open to falling in love with other frameworks. At the same time, I've always <span className="color-span">excelled</span> on server side. I'm a huge believer in programmatic solutions and that hard-coded anything is a last resort. I like my components <span className="color-span">modular, resuable, and functional.</span> I prefer my web servers RESTful but I would never turn down experimenting with a new methodology. I have a lot of <span className="color-span">skills</span> but working with a new and unfamiliar tech stack is much more exciting to me than looking smart. I expect to work in software and web development for the rest of my life.</p>

                <p className="about-p">I'm originally from <span className="color-span">New Orleans</span> and back on the Gulf Coast as of 2019. I make music. I love indie and <span className="color-span">bright colors</span>. I prefer <span className="color-span">PF2</span> to D&D 5e. I take my coffee black. I like history, camping, fashion, art, and RPGs.</p>

                <p className="about-p">I am happily married and love my wife and our two cats very much. It would be impossible to devote so much to what I do without them. Together we've gone to Virginia, California, New York, North Carolina, Louisiana, Mississippi, Pennsylvannia, and <span className="color-span">more,</span> sometimes to visit and sometimes to live. I can <span className="color-span">relocate anywhere as needed.</span></p>
            </div>
            <img id="profile" src={profile} alt="mars mendes" />
        </AboutMeSection >
    )
}

export default AboutMe
