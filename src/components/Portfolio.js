import React from 'react'
import { PortfolioSection } from '../styles'

const Portfolio = () => {
    return (
        <PortfolioSection>
            <div className="project-class">
                <h2><span className="color-span">Wunderlist</span> | <a href="https://github.com/MMendes24/wunderlistAPI">Github Repo</a> | Back-End Developer | September 2020</h2>
                <p className="desc-class">API used to power a todo list app which helps people manage their hectic modern lives</p>
                <p className="stack-class"><span className="color-span">Node.js</span> | Express | Bcrypt | Knex | SQLite3 | <span className="color-span">Jest</span> | Supertest </p>
                <p className="bullet-class">• Collaborated remotely with a team of React developers to design a web server to their specifications in four days</p>
                <p className="bullet-class">• Created a secure API that allows for user authentication, hashes passwords, keeps private data safely stored and allows authorized users to perform all CRUD operations related to todo list items</p>
                <p className="bullet-class">• API thoroughly tested using jest and supertest, utilizing a separate and safe testing database to ensure no user data was changed</p>

            </div>

            <div className="project-class">
                <h2><span className="color-span">Expatjournal</span> | <a href="https://github.com/MMendes24/expatjournal">Github Repo</a> | Senior Front-End Developer | August 2020</h2>
                <p className="desc-class">Modern blogging app that allows users to share their travel experiences </p>
                <p className="stack-class">HTML/CSS | <span className="color-span">React.js</span> | React-Router | <span className="color-span">Redux</span> | Redux-Thunk | Axios | Yup</p>
                <p className="bullet-class">• Designed a web application capable of serving as a modern blogging platform with modular, reusable components</p>
                <p className="bullet-class">• Implemented Redux to ensure efficient and uniform state management across the app, dramatically simplifying code as functionality expanded</p>
                <p className="bullet-class">• Reviewed and incorporated the code of junior developers, guiding them in their work and maximizing team productivity</p>
            </div>
        </PortfolioSection>
    )
}

export default Portfolio