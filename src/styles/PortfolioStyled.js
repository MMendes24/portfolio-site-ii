import styled from 'styled-components'
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'


const PortfolioSection = styled.section`
display: flex;
flex-flow: column;
background-image: linear-gradient(rgba(245, 245,245, 0.8), rgba(245, 245, 245, 0.8)), url(${bg});
padding-bottom: 10%;

.project-header {
    margin: 1%;
    font-size: 4rem;
    text-transform:uppercase;
}

h2 {
    margin: 2%;
    text-align: center;
    font-size: 1.5rem;
    text-transform:uppercase;
}

.desc-class {
    font-size: 1.3rem;
    margin: 1% auto;
}

.stack-class {
    margin: 2% auto;
    padding: 3% 0%;
    font-size: 1.3rem;
    font-weight: 600;
    border-bottom: 5px solid #262626;
}

.projects-wrapper {
    display: flex;
}

.project-class {
    width: 33%;
    margin: 1% auto;
}

.bullet-class {
    font-size: 1.1rem;
    margin: 2%;
}

.color-span {
    color: #a1251b;
    font-weight: bold;
}

`

export default PortfolioSection