import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Products = () => {
	const { getStockData } = useStockCall();
	const { products } = useSelector((state) => state.stock);

	useEffect(() => {
		getStockData("products");
	}, []);
	console.log(products);
	return (
		<div>
			<Typography variant="h4" color={"error"} mb={4}>
				products
			</Typography>
			<Button variant="contained">products</Button>
		</div>
	);
};

export default Products;
