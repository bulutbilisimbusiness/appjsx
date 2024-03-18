import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useState } from "react";
import Typography from "@mui/material/Typography";
const TextFieldComp = () => {
	// eslint-disable-next-line no-unused-vars
	const [err, setErr] = useState(false);
	return (
		<Container sx={{ mt: 4 }} maxWidth="md">
			<Typography variant="h4" color={"secondary.dark"} mt={2} align="center">
				Text Field
			</Typography>
			<TextField
				id="email"
				label="Email"
				variant="outlined"
				placeholder="Enter your email"
				required
				fullWidth
				margin="normal"
				error={err}
				helperText={err && "Incorrect email Format"}
			/>
			<TextField
				id="password"
				label="Password"
				variant="filled"
				placeholder="Enter your password"
				required
				fullWidth
				margin="normal"
			/>
			<TextField
				id="name"
				label="Name"
				variant="standard"
				placeholder="Enter your name"
				required
				fullWidth
				margin="normal"
				color="secondary"
			/>
		</Container>
	);
};

export default TextFieldComp;
