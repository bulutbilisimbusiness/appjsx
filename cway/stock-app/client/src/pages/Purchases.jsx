import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Purchases = () => {
	const { getStockData } = useStockCall();
	const { purchases } = useSelector((state) => state.stock);

	useEffect(() => {
		getStockData("purchases");
	}, []);
	console.log(purchases);
	return (
		<div>
			<Typography variant="h4" color={"error"} mb={4}>
				Puchases
			</Typography>
			<Button variant="contained">purchases</Button>
		</div>
	);
};

export default Purchases;
