import AuthLayout from "../../components/auth/AuthLayout.tsx";
import RegisterForm from "../../components/auth/RegisterForm.tsx";

const RegisterPage = () => {
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