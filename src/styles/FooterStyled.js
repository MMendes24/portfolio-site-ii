import styled from 'styled-components'

const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	margin: 1% 2% 2% 2%;
	width: 100%;
	border-top: 5px solid #262626;

    .social-link {
    margin: 2% 2%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}

.social-link:hover {
	transform: translateY(-10px);
  }

`

export default FooterStyled