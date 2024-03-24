import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchStart, getFirmsSuccess, fetchFail } from "../features/stockSlice";

const Firms = () => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const getFirms = async () => {
		dispatch(fetchStart());
		try {
			const { data } = await axios(
				`${import.meta.env.VITE_BASE_URL}/stock/firms/`,
				{
					headers: { Authorization: `Token ${token}` },
				}
			);
			dispatch(getFirmsSuccess(data));
			console.log(data);
		} catch (error) {
			dispatch(fetchFail());
			console.log(error);
		}
	};
	useEffect(() => {
		getFirms();
	}, []);
	return (
		<div>
			<Typography variant="h4" color={"error"} mb={4}>
				Firms
			</Typography>
			<Button variant="contained">NEW FIRM</Button>
		</div>
	);
};

export default Firms;
