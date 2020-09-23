import styled from 'styled-components'

const NavBarStyled = styled.nav`
	display: flex;
	justify-content: flex-end;
	margin: 1% 2% 2% 2%;
    border-bottom: 5px solid #262626;
    width: 100%;


.nav-link {
	color: white;
	font-size: 2rem;
	text-decoration: none;
	background-color: #262626;;
	margin: 1%;
	padding: 1%;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	border: none;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}

.nav-link:hover {
	background-color: #262626;
	box-shadow: 0px 15px 20px rgba(38, 38, 38, 0.4);
	color: #fff;
	transform: translateY(-7px);
  }

`
export default NavBarStyled