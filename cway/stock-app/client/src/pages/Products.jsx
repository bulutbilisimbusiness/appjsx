import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductTable from "../components/ProductTable";

import ProductModal from "../components/ProductModal";

const Products = () => {
	const { getStockData } = useStockCall();
	const { products } = useSelector((state) => state.stock);

	const [open, setOpen] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		getStockData("products");
		getStockData("categories");
		getStockData("brands");
	}, []);
	console.log(products);
	return (
		<div>
			<Typography variant="h4" color={"error"} mb={4}>
				Products
			</Typography>
			<Button variant="contained">NEW PRODUCT</Button>
			<ProductModal open={open} handleClose={handleClose} />
			<ProductTable />
		</div>
	);
};

export default Products;
