import styled from 'styled-components'
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'

const AboutMeSection = styled.section`
display: flex;
justify-content: center;
background-image: linear-gradient(rgba(245, 245,245, 0.8), rgba(245, 245, 245, 0.8)), url(${bg});
padding-bottom: 10%;
    #profile {
        border-radius: 10%;
        margin-top: 1%;
    }

    .about-header {
        margin: 2% 0%;
        text-align: center;
        font-size: 4rem;
        text-transform:uppercase;
    }

    .about-me {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 45%;
        margin-left: 10%;
    }

    .column {
        display: flex;
        justify-content: center;
        margin: 3% 0%;
        width: 100%;
    }

    .skills {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 45%;
        margin: 0% 2%;
    }

    .about-p {
        margin: 3% auto;
        font-size: 1.5rem;
    }

    .color-span {
        color: #a1251b;
        font-weight: bold;
    }

    i.fab {
		color: #a1251b;
		font-size: 5rem;
		transition: all 0.3s ease 0s;
        outline: none;
        margin: 0% 3%
    }

    .column-links{
        display: flex;
        justify-content: center;
        margin: 2%
    }

    a {
        margin: 0% 3%;
    }
    
    .redlink {
		color: #a1251b;
		transition: all 0.3s ease 0s;
		cursor: pointer;
        outline: none;
	}

	.redlink:hover {
		transform: translateY(-10px);
		color: #262626;
	  }

`

export default AboutMeSection