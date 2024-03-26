/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineIcon";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle } from "../styles/globalStyles";
export default function FirmCard({ firm, handleOpen }) {
	const { deleteStockData } = useStockCall();
	return (
		<Card
			sx={{
				p: 2,
				width: "300px",
				height: "400px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{firm.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{firm.address}
				</Typography>
			</CardContent>
			<CardMedia
				component={"img"}
				sx={{ p: 1, objectFit: "contain", height: 140 }}
				image={firm.image}
				title={firm.name}
			/>
			<Typography variant="body2" color="text.secondary">
				{firm.phone}
			</Typography>
			<CardActions>
				<EditIcon sx={btnStyle} onClick={handleOpen} />
				<DeleteOutlineIcon
					sx={btnStyle}
					onClick={() => deleteStockData("firms", firm.id)}
				/>
			</CardActions>
		</Card>
	);
}
