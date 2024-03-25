import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetchStart, fetchFail, getStockSuccess } from "../features/stockSlice";

const useStockCall = () => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const getStockData = async (url) => {
		dispatch(fetchStart());
		try {
			const { data } = await axios(
				`${import.meta.env.VITE_BASE_URL}/stock/${url}/`,
				{
					headers: { Authorization: `Token ${token}` },
				}
			);
			dispatch(getStockSuccess({ data, url }));
			console.log(data);
		} catch (error) {
			dispatch(fetchFail());
			console.log(error);
		}
	};

	return { getStockData };
};

export default useStockCall;
