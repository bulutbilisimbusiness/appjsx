import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Sales = () => {
	const { getStockData } = useStockCall();
	const { sales } = useSelector((state) => state.stock);

	useEffect(() => {
		getStockData("sales");
	}, []);
	console.log(sales);
	return (
		<div>
			<Typography variant="h4" color={"error"} mb={4}>
				Sales
			</Typography>
			<Button variant="contained">sales</Button>
		</div>
	);
};

export default Sales;
