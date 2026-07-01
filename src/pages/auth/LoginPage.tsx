import AuthLayout from "../../components/auth/AuthLayout.tsx";
import LoginForm from "../../components/auth/LoginForm.tsx";
import {useAuth} from "../../context/AuthContext.tsx";
import {Navigate, useLocation} from "react-router-dom";

const LoginPage = () => {
    const {isAuthenticated} = useAuth();
    const location = useLocation();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    const successMessage = location.state?.message;

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to continue discovering events."
        >
            <LoginForm successMessage={successMessage} />
        </AuthLayout>
    );
};

export default LoginPage;