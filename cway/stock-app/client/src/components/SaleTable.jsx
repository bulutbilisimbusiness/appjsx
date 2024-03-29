import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { btnStyle } from "../styles/globalStyles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
export default function SaleTable({ handleOpen, setInfo }) {
	const { sales } = useSelector((state) => state.stock);
	const { deleteStockData } = useStockCall();

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
			renderCell: ({ id, row: { brand_id, product_id, quantity, price } }) => {
				return [
					<GridActionsCellItem
						key={"edit"}
						icon={<EditIcon />}
						label="Edit"
						onClick={() => {
							handleOpen();
							setInfo({ id, brand_id, product_id, quantity, price });
						}}
						sx={btnStyle}
					/>,
					<GridActionsCellItem
						key={"delete"}
						icon={<DeleteForeverIcon />}
						label="Delete"
						onClick={() => deleteStockData("sales", id)}
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
				rows={sales}
				columns={columns}
				pageSize={10}
				pageSizeOptions={[20, 50, 75, 100]}
				slots={{ toolbar: GridToolbar }}
				disableRowSelectionOnClick
				sx={{
					boxShadow: 4,
				}}
			/>
		</Box>
	);
}
SaleTable.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	info: PropTypes.shape({
		brand_id: PropTypes.string,
		product_id: PropTypes.string,
		quantity: PropTypes.string,
		price: PropTypes.string,
		id: PropTypes.string, // Eğer id de kullanılıyorsa
	}).isRequired,
	setInfo: PropTypes.func.isRequired,
	handleOpen: PropTypes.func.isRequired,
};
