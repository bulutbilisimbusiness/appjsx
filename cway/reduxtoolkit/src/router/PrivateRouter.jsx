import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRouter = () => {
	const { user } = useSelector((state) => state.auth);

	return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
