import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getStockSuccess } from "../features/stockSlice";

const useStockCall = () => {
	const dispatch = useDispatch();
	const { axiosWithToken } = useAxios();
	const getStockData = async (url) => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken(`stock/${url}/`);
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
			await axiosWithToken.delete(`/stock/${url}/${id}/`);

			toastSuccessNotify(`${url} successfuly deleted`);
			getStockData(url);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(`${url} can not be deleted`);
			console.log(error);
		}
	};
	const postStockData = async (url, info) => {
		dispatch(fetchStart());
		try {
			await axiosWithToken.post(`/stock/${url}/`, info);

			toastSuccessNotify(`${url} successfuly posted`);
			getStockData(url);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(`${url} can not be posted`);
			console.log(error);
		}
	};
	const putStockData = async (url, info) => {
		dispatch(fetchStart());
		try {
			await axiosWithToken.put(`/stock/${url}/${info.id}/`, info);

			toastSuccessNotify(`${url} successfuly updated`);
			getStockData(url);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(`${url} can not be updated`);
			console.log(error);
		}
	};

	return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;
