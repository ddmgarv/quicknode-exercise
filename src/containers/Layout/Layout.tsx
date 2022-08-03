import { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar, Sidebar } from "../../components";
import { brandsKey } from "../../constants/brands";
import { getBrand } from "../../mock/getBrand";

const LayoutContainer = styled.div`
	display: flex;
	color: #a4d6e0;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const MainContent = styled.div`
	width: 100%;
	height: calc(100vh - 100px);
	background-color: #0b1c2f;
`;

export const Layout = (props: { children: JSX.Element }) => {
	const [brand, setBrand] = useState<brandsKey>("QN");

	useEffect(() => {
		getBrand(1).then((res) => {
			setBrand(res as brandsKey);
		});
	}, []);

	return (
		<LayoutContainer>
			<Sidebar brand={brand} />
			<Container>
				<Navbar />
				<MainContent>{props.children}</MainContent>
			</Container>
		</LayoutContainer>
	);
};
