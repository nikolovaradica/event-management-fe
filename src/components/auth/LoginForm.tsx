import Input from "../common/Input.tsx";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <form className="form">

            <div className="form-group">
                <label>Email</label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <Input
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >
                Login
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