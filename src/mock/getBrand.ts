export const getBrand = (userType: number) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			switch (userType) {
				case 1:
					resolve("QN");
					break;
				case 2:
					resolve("ICY");
					break;
				default:
					resolve("QN");
					break;
			}
		}, 600);
	});
};
