import styled from "styled-components";
import { Link } from "react-router-dom";
import { sidebarOptions } from "../../constants/sidebarOptions";
import { brands, brandsKey } from "../../constants/brands";

const Brand = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SiderbarContainer = styled.div`
	width: 275px;
	height: 100vh;
	background-color: #081421;
	border-right: 1px solid #112c49;
	display: flex;
	flex-direction: column;
`;

const SidebarOptionsList = styled.ul`
	list-style-type: none;
`;

const SidebarOptionsItem = styled.li`
	margin-top: 10px;
`;

const SidebarOptionIcon = styled.span`
	color: #0176fa;
`;

const SidebarOptionText = styled.span`
	margin-left: 15px;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export const Sidebar = (props: { brand: brandsKey }) => (
	<SiderbarContainer>
		<Brand>{brands[props.brand]}</Brand>
		<SidebarOptionsList>
			{sidebarOptions.map((option) => (
				<SidebarOptionsItem key={option.id}>
					<NavLink to={option.route}>
						<SidebarOptionIcon>{option.icon}</SidebarOptionIcon>
						<SidebarOptionText>{option.title}</SidebarOptionText>
					</NavLink>
				</SidebarOptionsItem>
			))}
		</SidebarOptionsList>
	</SiderbarContainer>
);
