import styled from 'styled-components'

const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #262626;
	padding: 3% 0%;

    .social-link {
		margin: 1% 3%;
	}

	i.fab {
		color: whitesmoke;
		font-size: 7rem;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	i.fab:hover {
		transform: translateY(-10px);
		color: #a1251b;
  	}

`

export default FooterStyled