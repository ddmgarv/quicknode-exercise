import { networkIcons, networkIconsKey } from "../constants/networkIcons";

export const getNetworkIcon = (symbol: networkIconsKey) => {
	return networkIcons[symbol];
};
