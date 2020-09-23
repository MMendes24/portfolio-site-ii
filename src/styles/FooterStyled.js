import styled from 'styled-components'

const FooterStyled = styled.nav`
	display: flex;
	justify-content: flex-start;
	margin: 1% 2% 2% 2%;
    width: 100%;

    .social-link {
    margin: 2%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}

.social-link:hover {
	box-shadow: 0px 15px 20px rgba(38, 38, 38, 0.4);
	transform: translateY(-7px);
  }

`

export default FooterStyled