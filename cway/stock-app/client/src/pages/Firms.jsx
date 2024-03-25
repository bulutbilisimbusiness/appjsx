import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";

const Firms = () => {
	const { getStockData } = useStockCall();
	const { firms } = useSelector((state) => state.stock);

	useEffect(() => {
		getStockData("firms");
	}, []);
	console.log(firms);
	return (
		<div>
			<Typography variant="h4" color={"error"} mb={4}>
				Firms
			</Typography>
			<Button variant="contained">NEW FIRM</Button>
		</div>
	);
};

export default Firms;
