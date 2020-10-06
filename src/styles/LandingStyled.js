import styled from 'styled-components'
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'

const LandingSection = styled.section`

display: flex;
flex-flow: column;
align-items: center;
padding: 3% 0%;
background-image: linear-gradient(rgba(245, 245,245, 0.9), rgba(245, 245, 245, 0.9)), url(${bg});


h1 {
    margin: 1%;
    font-size: 5rem;
}

p {
    margin: 2% 4%;
    font-size: 1.5rem;
    width: 60%;
}

.ps {
    margin: 3% 2%;
    font-size: 1rem;
}

.color-span {
    color: #a1251b;
    font-weight: bold;
}
`
export default LandingSection