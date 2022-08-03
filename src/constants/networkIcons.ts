import BTC from "../assets/btc.png";
import ETH from "../assets/eth.png";
import MATIC from "../assets/matic.png";
import SOL from "../assets/sol.png";
import BSC from "../assets/bsc.png";

export const networkIcons = {
	btc: BTC,
	eth: ETH,
	matic: MATIC,
	sol: SOL,
	bsc: BSC,
};

export type networkIconsKey = keyof typeof networkIcons;
