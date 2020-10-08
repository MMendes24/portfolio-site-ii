import styled from 'styled-components'
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'


const PortfolioSection = styled.section`
display: flex;
justify-content: space-evenly;
background-image: linear-gradient(rgba(245, 245,245, 0.8), rgba(245, 245, 245, 0.8)), url(${bg});

h2 {
    margin: 2%;
    text-align: center;
    font-size: 2rem;
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

.project-class {
    width: 40%;
    margin: 1% auto;
}

.bullet-class {
    font-size: 1.3rem;
    margin: 2% auto;
}

.color-span {
    color: #a1251b;
    font-weight: bold;
}

`

export default PortfolioSection