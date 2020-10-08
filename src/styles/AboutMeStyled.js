import styled from 'styled-components'
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'

const AboutMeSection = styled.section`
display: flex;
flex-flow: column;
align-items: center;
background-image: linear-gradient(rgba(245, 245,245, 0.8), rgba(245, 245, 245, 0.8)), url(${bg});

    #profile {
        border-radius: 10%;
        margin: 1% 0%;
    }

    .about-header {
        margin: 2% 0%;
        text-align: center;
        font-size: 4rem;
        text-transform:uppercase;
    }

    .column {
        display: flex;
        margin: 2% 0%;
        width: 60%;
        justify-content: center;
        border-bottom: 5px solid #a1251b;
    }

    .about-p {
        margin: 2% auto;
        font-size: 1.5rem;
        width: 50%;
    }

    p:last-child {
        margin-bottom: 3%;
    }

    .color-span {
        color: #a1251b;
        font-weight: bold;
    }

    i.fab {
		color: #a1251b;
		font-size: 6rem;
		transition: all 0.3s ease 0s;
        outline: none;
        margin: 0% 3%;
	}

	i.fab:hover {
		transform: translateY(-10px);
	  }

`

export default AboutMeSection