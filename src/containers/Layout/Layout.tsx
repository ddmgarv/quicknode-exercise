import { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar, Sidebar } from "../../components";
import { brandsKey } from "../../constants/brands";
import { getBrand } from "../../mock/getBrand";

export const Layout = (props: { children?: JSX.Element }) => {
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
				<div>{props.children}</div>
			</Container>
		</LayoutContainer>
	);
};

const LayoutContainer = styled.div`
	display: flex;
	color: #a4d6e0;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
