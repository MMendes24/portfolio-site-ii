import styled from 'styled-components'

const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	width: 100%;
	padding-bottom: 2%;
	background-color: #262626;

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