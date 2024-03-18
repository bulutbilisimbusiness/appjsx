import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
const Typo = () => {
	return (
		<Container maxWidth="md">
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
			<Stack
				direction="row"
				spacing={1}
				mt={4}
				justifyContent="center"
				alignItems="center"
			>
				<Button variant="outlined" color="primary">
					Click
				</Button>
				<Button variant="contained" color="secondary">
					Save
				</Button>
				<Button variant="contained" color="success">
					Save
				</Button>
				<Button variant="contained" color="warning">
					Save
				</Button>
				<Button variant="contained" color="error">
					Save
				</Button>
				<Button
					variant="contained"
					sx={{ color: "purple", backgroundColor: "yellow" }}
				>
					Save
				</Button>
				<Button
					variant="contained"
					sx={{ color: "error.dark", backgroundColor: "success.light" }}
				>
					Save
				</Button>
				<Button>Change</Button>
			</Stack>
		</Container>
	);
};

export default Typo;
