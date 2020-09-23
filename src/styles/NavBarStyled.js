import styled from 'styled-components'

const Nav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	margin: 1% 2% 2% 2%;
    border-bottom: 5px solid #262626;
    width: 100%;


.nav-link {
	color: #262626;
	font-size: 2rem;
	text-decoration: none;
	border: 3px solid #262626;
	margin: 1%;
	padding: 1%;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}

.nav-link:hover {
	transform: translateY(-7px);
  }

.nav-header {
	color: #262626;
    font-size: 2.5rem;
    margin: 1%;
    padding: 1%;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 2.5px;
}

`
export default Nav