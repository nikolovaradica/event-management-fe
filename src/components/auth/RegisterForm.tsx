import Input from "../common/Input.tsx";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <form className="form">
            <div className="form-group">
                <label>First Name</label>
                <Input
                    type="text"
                    placeholder="Enter your first name"
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <Input
                    type="text"
                    placeholder="Enter your last name"
                />
            </div>
            <div className="form-group">
                <label>Username</label>
                <Input
                    type="text"
                    placeholder="Choose a username"
                />
            </div>
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
                    placeholder="Create a password"
                />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <Input
                    type="password"
                    placeholder="Confirm your password"
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >
                Register
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