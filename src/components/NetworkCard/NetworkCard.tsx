import styled from "styled-components";
import { Network } from "../../containers/Expressions/Expressions";
import { getNetworkIcon } from "../../utils/getNetworkIcon";

const Card = styled.button`
	width: 250px;
	height: 80px;
	outline: none;
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	align-items: center;
	padding-left: 15px;
	color: #000;
	cursor: pointer;
	&:hover {
		background-color: #d3d3d3;
	}
`;

const CardContent = styled.div`
	display: flex;
	align-items: center;
`;

const CardText = styled.span`
	margin-left: 10px;
`;

const IconImage = styled.img`
	width: 45px;
	height: 45px;
`;

export const NetworkCard = (props: Network) => {
	return (
		<Card>
			<CardContent>
				<IconImage src={getNetworkIcon(props.symbol)} alt={props.symbol} />
				<CardText>{props.networkName}</CardText>
			</CardContent>
		</Card>
	);
};
