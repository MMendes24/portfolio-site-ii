import styled from 'styled-components'

const Nav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	background-color: #262626;
	color: whitesmoke;


.nav-link {
	color: whitesmoke;
	font-size: 1.3rem;
	text-decoration: none;
	border: 3px solid whitesmoke;
	border-radius: 10%;
	padding: 1%;
	margin: 1% 2%;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}


.nav-link:hover {
	transform: translateY(-10px);
	color: #a1251b;
	border: 3px solid #a1251b;
  }

.nav-header {
	color: whitesmoke;
	font-size: 3rem;
	text-transform: uppercase;
	text-decoration: none;
	transition: all 0.3s ease 0s;
}

.nav-header:hover {
	color:#a1251b;
}

`
export default Nav