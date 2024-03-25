import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
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
	const deleteStockData = async (url, id) => {
		dispatch(fetchStart());
		try {
			await axios(`${import.meta.env.VITE_BASE_URL}/stock/${url}/${id}/`, {
				headers: { Authorization: `Token ${token}` },
			});
			toastSuccessNotify(`${url} successfuly deleted`);
			getStockData(url);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(`${url} can not be deleted`);
			console.log(error);
		}
	};

	return { getStockData, deleteStockData };
};

export default useStockCall;
