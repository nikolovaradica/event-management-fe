import AuthLayout from "../../components/auth/AuthLayout.tsx";
import RegisterForm from "../../components/auth/RegisterForm.tsx";
import {useAuth} from "../../context/AuthContext.tsx";
import {Navigate} from "react-router-dom";

const RegisterPage = () => {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <AuthLayout
            title="Create Your Account"
            subtitle="Join NexEvent and discover professional events tailored to your interests."
        >
            <RegisterForm />
        </AuthLayout>
    );
};

export default RegisterPage;