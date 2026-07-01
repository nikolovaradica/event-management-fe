import Input from "../common/Input.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../../context/AuthContext.tsx";
import {AxiosError} from "axios";
import * as React from "react";

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const {register} = useAuth();

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (password !== repeatPassword) {
            setError("Passwords do not match.");
            return;
        }
        setIsLoading(true);

        try {
            await register({firstName, lastName, username, email, password, repeatPassword});
            navigate("/login", {
                state: {
                    message: "Account created successfully. Please sign in."
                }
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data?.message ?? "Registration failed.");
            } else {
                setError("Something went wrong.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <Input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <Input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Username</label>
                <Input
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <Input
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <Input
                    type="password"
                    placeholder="Confirm your password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
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
                {isLoading ? "Creating Account..." : "Register"}
            </button>
            <p className="auth-footer">
                Already have an account?{" "}
                <Link to="/login">
                    Login
                </Link>
            </p>
        </form>
    );
};

export default RegisterForm;