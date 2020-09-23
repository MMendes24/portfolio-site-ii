import styled from 'styled-components'

const Footer = styled.footer`
	display: flex;
	justify-content: flex-start;
	margin: 1% 2% 2% 2%;
    width: 100%;

    .social-link {
    margin: 0% 2%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}

.social-link:hover {
	transform: translateY(-7px);
  }

`

export default Footer