/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { useState } from "react";
import useStockCall from "../hooks/useStockCall";

export default function FirmModal({ open, handleClose }) {
	const { postStockCall } = useStockCall();
	const [info, setInfo] = useState({
		name: "",
		phone: "",
		address: "",
		image: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		postStockCall("firms", info);
		setInfo({
			name: "",
			phone: "",
			address: "",
			image: "",
		});
		handleClose();
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Box
						sx={{ display: "flex", flexDirection: "column", gap: 2 }}
						component="form"
						onSubmit={handleSubmit}
					>
						<TextField
							label="Firm Name"
							name="name"
							id="name"
							type="text"
							variant="outlined"
							value={info?.name}
							required
							onChange={handleChange}
						/>
						<TextField
							label="Phone"
							name="phone"
							id="phone"
							type="tel"
							variant="outlined"
							value={info?.phone}
							required
							onChange={handleChange}
						/>
						<TextField
							label="Address"
							name="address"
							id="address"
							type="text"
							variant="outlined"
							value={info?.address}
							required
							onChange={handleChange}
						/>
						<TextField
							label="Image"
							name="image"
							id="image"
							type="url"
							variant="outlined"
							value={info?.image}
							required
							onChange={handleChange}
						/>

						<Button variant="contained" type="submit">
							Submit Firm
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
