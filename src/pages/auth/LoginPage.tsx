import AuthLayout from "../../components/auth/AuthLayout.tsx";
import LoginForm from "../../components/auth/LoginForm.tsx";

const LoginPage = () => {
    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to continue discovering events."
        >
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;