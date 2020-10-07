import styled from 'styled-components'
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'

const AboutMeSection = styled.section`
display: flex;
padding: 3% 0%;
width: 100%;
background-image: linear-gradient(rgba(245, 245,245, 0.8), rgba(245, 245, 245, 0.8)), url(${bg});

    #profile {
        width: 33%;
        margin: 1% 3%;
        border-radius: 10%;
        border: 3px solid #262626;
    }

    .landing-div {
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }

    .about-header {
        margin: 1%;
        text-align: center;
        font-size: 4rem;
        text-transform:uppercase;
    
    }

    .about-p {
        margin: 2% 5%;
        font-size: 1.5rem; 
        }

    .color-span {
        color: #a1251b;
        font-weight: bold;
    }
`

export default AboutMeSection