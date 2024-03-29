import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globalStyles";
import useStockCall from "../hooks/useStockCall";

export default function ProductTable() {
	const { products } = useSelector((state) => state.stock);
	const { deleteStockData } = useStockCall();
	const columns = [
		{
			field: "id",
			headerName: "#",
			width: 90,
			headerAlign: "center",
			flex: 0.5,
			align: "center",
		},

		{
			field: "category",
			valueGetter: (params) => params?.row?.category_id?.name || "",
			headerName: "Category",
			flex: 2,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "brand",
			headerName: "Brand",
			valueGetter: (params) => params?.row?.brand_id?.name || "",
			headerAlign: "center",
			flex: 2,
			align: "center",
		},
		{
			field: "name",
			headerName: "Name",
			headerAlign: "center",
			flex: 1,
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
			field: "action",
			headerName: "Actions",
			type: "actions",
			flex: 1,
			headerAlign: "center",
			align: "center",
			getActions: (params) => [
				<GridActionsCellItem
					key={params.id}
					icon={<DeleteForeverIcon />}
					label="Delete"
					sx={btnStyle}
					onClick={() => deleteStockData("products", params.id)}
				/>,
			],
		},
	];

	return (
		<Box sx={{ width: "100%", mt: 4 }}>
			<DataGrid
				autoHeight
				rows={products}
				columns={columns}
				pageSizeOptions={[20, 50, 75, 100]}
				disableRowSelectionOnClick
				slots={{ toolbar: GridToolbar }}
			/>
		</Box>
	);
}
