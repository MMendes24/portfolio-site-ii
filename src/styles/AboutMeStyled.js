import styled from 'styled-components'

const AboutMeSection = styled.section`
display: flex;
flex-flow: column;
align-items: center;
width: 100%;
padding-bottom: 2%;

    .about-header {
        margin: 2%;
        font-size: 3rem;
    }

    .about-p {
        margin: 2% 4%;
        font-size: 1.5rem;
        width: 60%;    
        }

    .color-span {
        color: #a1251b;
        font-weight: bold;
    }
`

export default AboutMeSection