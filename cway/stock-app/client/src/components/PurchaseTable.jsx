/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { btnStyle } from "../styles/globalStyles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function PurchaseTable({ handleOpen, setInfo }) {
	const { purchases } = useSelector((state) => state.stock);
	const { deleteStockData } = useStockCall();
	const [processedPurchases, setProcessedPurchases] = useState([]);

	useEffect(() => {
		const newPurchases = purchases.map((purchase) => ({
			...purchase,
			firm: purchase.firm_id?.name || "N/A",
			brand: purchase.brand_id?.name || "N/A",
			product: purchase.product_id?.name || "N/A",
		}));
		setProcessedPurchases(newPurchases);
	}, [purchases]);

	const columns = [
		{
			field: "createds",
			headerName: "Date",
			minWidth: 150,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "firm",
			headerName: "Firm",
			flex: 2,
			minWidth: 100,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "brand",
			headerName: "Brand",
			flex: 1.5,
			minWidth: 100,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "product",
			headerName: "Product",
			flex: 1.5,
			minWidth: 100,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "quantity",
			headerName: "Quantity",
			minWidth: 70,
			headerAlign: "center",
			align: "center",
			flex: 1,
			type: "number",
		},
		{
			field: "price",
			headerName: "Price",
			minWidth: 70,
			headerAlign: "center",
			align: "center",
			flex: 1,
			type: "number",
		},
		{
			field: "price_total",
			headerName: "Amount",
			minWidth: 90,
			headerAlign: "center",
			align: "center",
			flex: 1,
			type: "number",
		},
		{
			field: "actions",
			headerName: "Actions",
			minWidth: 70,
			headerAlign: "center",
			align: "center",
			flex: 1,
			renderCell: (params) => [
				<GridActionsCellItem
					key={"edit"}
					icon={<EditIcon />}
					label="Edit"
					onClick={() => {
						handleOpen();
						setInfo({ id: params.id, ...params.row });
					}}
					sx={btnStyle}
				/>,
				<GridActionsCellItem
					key="delete"
					icon={<DeleteForeverIcon />}
					label="Delete"
					onClick={() => deleteStockData("purchases", params.id)}
					sx={btnStyle}
				/>,
			],
		},
	];

	return (
		<Box sx={{ width: "100%", mt: 2 }}>
			<DataGrid
				autoHeight
				rows={processedPurchases}
				columns={columns}
				pageSize={5}
				slots={{ toolbar: GridToolbar }}
				pageSizeOptions={[20, 50, 75, 100]}
				components={{ Toolbar: GridToolbar }}
				disableSelectionOnClick
				sx={{ boxShadow: 4 }}
			/>
		</Box>
	);
}
