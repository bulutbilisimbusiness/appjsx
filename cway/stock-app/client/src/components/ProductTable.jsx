import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

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
		headerName: "Category",
		flex: 2,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "brand",
		headerName: "Brand",
		type: "number",
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
		type: "number",
		flex: 1,
		headerAlign: "center",
		align: "center",
	},
];

export default function ProductTable() {
	const { products } = useSelector((state) => state.stock);
	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={products}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
	);
}
