import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	fetchFail,
	fetchStart,
	loginSuccess,
	logoutSuccess,
	registerSuccess,
} from "../features/authSlice";

const useAuthCall = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const login = async (userData) => {
		dispatch(fetchStart());
		try {
			const { data } = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
				userData
			);
			dispatch(loginSuccess(data));
			console.log(data);
			toastSuccessNotify("Login islemi basarili");
			navigate("/stock");
		} catch (error) {
			console.log(error);

			dispatch(fetchFail());
			toastErrorNotify("Login işlemi başarısız");
		}
	};
	const logout = async () => {
		dispatch(fetchStart());
		try {
			await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`);
			dispatch(logoutSuccess());

			toastSuccessNotify("Logout islemi basarili");
			navigate("/");
		} catch (error) {
			console.log(error);

			dispatch(fetchFail());
			toastErrorNotify(error.response.data.non_field_errors[0]);
		}
	};
	const register = async (userData) => {
		dispatch(fetchStart());
		try {
			const { data } = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/account/register/`,
				userData
			);
			dispatch(registerSuccess(data));

			toastSuccessNotify("Kayit islemi basarili");
			navigate("/stock");
		} catch (error) {
			console.log(error);

			dispatch(fetchFail());
			toastErrorNotify("Kayıt işlemi başarısız olmuştur");
		}
	};
	return { login, logout, register };
};

export default useAuthCall;
