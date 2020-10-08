import styled from 'styled-components'

const FooterStyled = styled.footer`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #262626;
	padding: 1% 0%;

	.footer-div {
		display: flex;
		justify-content: center;
		width: 100%;
	}

    .social-link {
		margin: 1% 2%;
	}

	i.fab {
		color: whitesmoke;
		font-size: 6rem;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	i.fab:hover {
		transform: translateY(-10px);
		color: #a1251b;
	  }
	  
	.about-p {
        margin: 2% 4%;
        font-size: 1rem;
		color: whitesmoke;    
    }

`

export default FooterStyled