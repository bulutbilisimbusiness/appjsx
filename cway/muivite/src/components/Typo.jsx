import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Typo = () => {
	return (
		<Box
			sx={{
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				border: "1px  solid tomato",
			}}
		>
			<Typography variant="h6" component="h1" color="red" mt={4}>
				TYPO
			</Typography>
			<Typography variant="button" color="palegreen">
				typo
			</Typography>
			<Typography
				variant="body2"
				sx={{ color: "blue", backgroundColor: "palevioletred", mt: "1rem" }}
				align="center"
			>
				button text
			</Typography>
		</Box>
	);
};

export default Typo;
