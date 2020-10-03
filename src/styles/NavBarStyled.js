import styled from 'styled-components'

const Nav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	margin: 1% 2% 2% 2%;
    border-bottom: 5px solid #262626;
    width: 100%;


.nav-link, .nav-link-res {
	color: #262626;
	font-size: 1.3rem;
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

.nav-link-res {
	color: whitesmoke;
	background-color: #a1251b;
	font-weight: 500;
}

.nav-link:hover, .nav-link-res:hover {
	transform: translateY(-10px);
  }

.nav-header {
	color: #262626;
	font-size: 3rem;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 2.5px;
	transition: all 0.3s ease 0s;
}

.nav-header:hover {
	color:#a1251b;
}

`
export default Nav