import { useEffect, useState } from "react";
import styled from "styled-components";
import { NetworkCard } from "../../components/NetworkCard";
import { networkIconsKey } from "../../constants/networkIcons";
import { getAvailableNetworks } from "../../mock/getAvailableNetworks";

const ExpressionsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CardsContainer = styled.div`
	max-width: 1000px;
	margin: 50px auto 0 auto;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	& > div {
		margin-right: 8px;
		margin-top: 8px;
	}
`;

const Title = styled.h1`
	text-align: center;
	margin-top: 55px;
`;

export interface Network {
	networkName: string;
	disabled: boolean;
	symbol: networkIconsKey;
}

export const Expressions = () => {
	const [availableNetworks, setAvailableNetworks] = useState<Network[]>([]);

	useEffect(() => {
		getAvailableNetworks().then((res) => {
			setAvailableNetworks(res as Network[]);
		});
	}, []);

	return (
		<ExpressionsContainer>
			<div>
				<Title>Choose Network</Title>
			</div>
			<CardsContainer>
				{availableNetworks.map((networkData) => (
					<NetworkCard {...networkData} />
				))}
			</CardsContainer>
		</ExpressionsContainer>
	);
};
