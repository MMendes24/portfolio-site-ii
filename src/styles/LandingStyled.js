import styled from 'styled-components'
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'

const LandingSection = styled.section`

display: flex;
flex-flow: column;
align-items: center;
padding: 2% 0%;
background-image: linear-gradient(rgba(245, 245,245, 0.8), rgba(245, 245, 245, 0.8)), url(${bg});


h1 {
    margin: 1%;
    font-size: 4rem;
    text-transform:uppercase;
}

p {
    margin: 1% 3%;
    font-size: 1.5rem;
    width: 60%;
    font-weight: 600;
}

.ps {
    margin: 1% 2%;
    padding: 3% 0%;
    font-size: 1rem;
}

.color-span {
    color: #a1251b;
    font-weight: bold;
}
`
export default LandingSection