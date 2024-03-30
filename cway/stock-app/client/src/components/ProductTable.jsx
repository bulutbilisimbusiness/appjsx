import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCall from "../hooks/useStockCall";

export default function ProductTable() {
	const { products } = useSelector((state) => state.stock);
	const { deleteStockData } = useStockCall();
	const [processedProducts, setProcessedProducts] = useState([]);

	useEffect(() => {
		const newProducts = products.map((product) => ({
			...product,
			category: product.category_id?.name || "N/A",
			brand: product.brand_id?.name || "N/A",
		}));
		setProcessedProducts(newProducts);
	}, [products]);

	const columns = [
		{
			field: "id",
			headerName: "#",
			headerAlign: "center",
			align: "center",
			flex: 0.5,
		},
		{
			field: "category",
			headerName: "Category",
			flex: 2,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "brand",
			headerName: "Brand",
			flex: 2,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "stock",
			headerName: "Stock",
			type: "number",
			flex: 1,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "actions",
			type: "actions",
			headerName: "Actions",
			flex: 1,
			headerAlign: "center",
			align: "center",
			getActions: (params) => [
				<GridActionsCellItem
					key={params.id}
					icon={<DeleteForeverIcon />}
					label="Delete"
					sx={{ "&:hover": { color: "red" }, cursor: "pointer" }}
					onClick={() => deleteStockData("products", params.id)}
				/>,
			],
		},
	];

	return (
		<Box sx={{ width: "100%", mt: 4 }}>
			<DataGrid
				autoHeight
				rows={processedProducts}
				columns={columns}
				slots={{ toolbar: GridToolbar }}
				pageSizeOptions={[20, 50, 75, 100]}
				disableRowSelectionOnClick
				components={{ Toolbar: GridToolbar }}
			/>
		</Box>
	);
}
