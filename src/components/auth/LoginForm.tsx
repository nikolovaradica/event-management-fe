import Input from "../common/Input.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../../context/AuthContext.tsx";
import {AxiosError} from "axios";
import * as React from "react";

type LoginFormProps = {
    successMessage?: string;
};

const LoginForm = ({successMessage} :LoginFormProps) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const response = await login({usernameOrEmail, password});
            if (response.role === "ADMIN") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data?.message ?? "Invalid username or password.");
            } else {
                setError("Something went wrong.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {
                successMessage && (
                    <p className="form-success">
                        {successMessage}
                    </p>
                )
            }
            <div className="form-group">
                <label>Email</label>
                <Input
                    type="text"
                    placeholder="Enter your email"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {
                error && (
                    <p className="form-error">
                        {error}
                    </p>
                )
            }
            <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
            >
                {isLoading ? "Signing In..." : "Login"}
            </button>
            <p className="auth-footer">
                Don't have an account?{" "}
                <Link to="/register">
                    Register
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;