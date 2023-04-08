import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {

    const { isAdmin } = useAuthContext();

    if (!isAdmin) {
        return <Navigate to='/' />
    }
    return children ? children : <Outlet />
};