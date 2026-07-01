import type {ReactNode} from "react";
import {useAuth} from "../context/AuthContext.tsx";
import {Navigate} from "react-router-dom";

type AdminRouteProps = {
    children: ReactNode;
};

const AdminRoute = ({children}: AdminRouteProps) => {
    const {isAuthenticated, role} = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (role !== "ADMIN") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;