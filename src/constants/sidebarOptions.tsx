import { FaHammer } from "react-icons/fa";
import { AiOutlineHeatMap } from "react-icons/ai";

export const sidebarOptions = [
	{
		title: "Destinations",
		route: "/destinations",
		id: "sidebar-option-destination",
		icon: <AiOutlineHeatMap />,
	},
	{
		title: "Expressions",
		route: "/expressions",
		id: "sidebar-option-expressions",
		icon: <FaHammer />,
	},
];
