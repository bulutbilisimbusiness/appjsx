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

export default function SaleTable({ handleOpen, setInfo }) {
	const { sales } = useSelector((state) => state.stock);
	const { deleteStockData } = useStockCall();
	const [processedSales, setProcessedSales] = useState([]);

	useEffect(() => {
		const newSales = sales.map((sale) => ({
			...sale,
			brand: sale.brand_id?.name || "N/A",
			product: sale.product_id?.name || "N/A",
		}));
		setProcessedSales(newSales);
	}, [sales]);

	const columns = [
		{
			field: "createds",
			headerName: "Date",
			minWidth: 150,
			headerAlign: "center",
			align: "center",
			flex: 1,
		},
		{
			field: "brand",
			headerName: "Brand",
			flex: 1,
			minWidth: 100,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "product",
			headerName: "Product",
			flex: 1,
			minWidth: 100,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "quantity",
			headerName: "Quantity",
			minWidth: 100,
			headerAlign: "center",
			align: "center",
			flex: 1,
		},
		{
			field: "price",
			headerName: "Price",
			minWidth: 80,
			headerAlign: "center",
			align: "center",
			flex: 1,
		},
		{
			field: "price_total",
			headerName: "Amount",
			minWidth: 80,
			headerAlign: "center",
			align: "center",
			flex: 1,
		},
		{
			field: "actions",
			headerName: "Actions",
			minWidth: 80,
			headerAlign: "center",
			align: "center",
			flex: 1,
			renderCell: (params) => {
				return [
					<GridActionsCellItem
						key={"edit"}
						icon={<EditIcon />}
						label="Edit"
						onClick={() => {
							handleOpen();
							setInfo({
								id: params.id,
								brand_id: params.row.brand_id,
								product_id: params.row.product_id,
								quantity: params.row.quantity,
								price: params.row.price,
							});
						}}
						sx={btnStyle}
					/>,
					<GridActionsCellItem
						key={"delete"}
						icon={<DeleteForeverIcon />}
						label="Delete"
						onClick={() => deleteStockData("sales", params.id)}
						sx={btnStyle}
					/>,
				];
			},
		},
	];

	return (
		<Box sx={{ width: "100%", mt: 2 }}>
			<DataGrid
				autoHeight
				rows={processedSales}
				columns={columns}
				pageSize={10}
				slots={{ toolbar: GridToolbar }}
				pageSizeOptions={[20, 50, 75, 100]}
				components={{ Toolbar: GridToolbar }}
				disableRowSelectionOnClick
				sx={{ boxShadow: 4 }}
			/>
		</Box>
	);
}
