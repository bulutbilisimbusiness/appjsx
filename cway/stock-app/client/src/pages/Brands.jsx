import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Brands = () => {
	const { getStockData } = useStockCall();
	const { brands } = useSelector((state) => state.stock);

	useEffect(() => {
		getStockData("brands");
	}, []);
	console.log(brands);
	return (
		<div>
			<Typography variant="h4" color={"error"} mb={4}>
				brands
			</Typography>
			<Button variant="contained">brands</Button>
		</div>
	);
};

export default Brands;
