import styled from 'styled-components'

const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	width: 100%;
	border-bottom: 5px solid #262626;
	padding-bottom: 2%;

    .social-link {
    margin: 1% 3%;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;

	}

	i.fab {
		color: #a1251b;
		font-size: 7rem;
	}

	.social-link:hover {
		transform: translateY(-10px);
  	}

`

export default FooterStyled