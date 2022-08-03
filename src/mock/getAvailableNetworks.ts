const availableNetworks = [
	{ networkName: "Bitcoin", disabled: false, symbol: "btc" },
	{ networkName: "Ethereum", disabled: false, symbol: "eth" },
	{ networkName: "Polygon", disabled: false, symbol: "matic" },
	{ networkName: "Binance Smart Chain", disabled: false, symbol: "bsc" },
	{ networkName: "Solana", disabled: false, symbol: "sol" },
];

export const getAvailableNetworks = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(availableNetworks);
		}, 800);
	});
};
