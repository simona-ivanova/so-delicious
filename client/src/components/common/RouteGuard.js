import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {

    const { isAdmin, isOwner} = useAuthContext();

    if (!(isAdmin || isOwner)) {
        return <Navigate to='/' replace/>
    }
    return children ? children : <Outlet />
};