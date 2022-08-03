import styled from "styled-components";
import { Link } from "react-router-dom";
import { navbarOptions } from "../../constants/navbarOptions";

const NavbarContainer = styled.nav`
	width: 100%;
	height: 100px;
	background-color: #091829;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-bottom: 1px solid #112c49;
	z-index: 1000;
`;

const NavbarOptionsList = styled.ul`
	list-style-type: none;
`;

const NavbarOptionsItem = styled.li`
	display: inline-block;
	margin-right: 20px;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export const Navbar = () => (
	<NavbarContainer>
		<NavbarOptionsList>
			{navbarOptions.map((option) => (
				<NavbarOptionsItem key={option.id}>
					<NavLink to={option.route}>{option.title}</NavLink>
				</NavbarOptionsItem>
			))}
		</NavbarOptionsList>
	</NavbarContainer>
);
