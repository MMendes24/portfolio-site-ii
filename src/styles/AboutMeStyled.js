import styled from 'styled-components'

const AboutMeSection = styled.section`
display: flex;
flex-flow: column;
align-items: center;
width: 100%;
border-bottom: 5px solid #262626;
padding-bottom: 2%;

    .about-header {
        margin: 2%;
        font-size: 5rem;
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