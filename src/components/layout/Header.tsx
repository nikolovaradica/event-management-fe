import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {useAuth} from "../../context/AuthContext.tsx";

const Header = () => {
    const { isAuthenticated, role, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <header className="app-header">
            <div className="app-container">
                <nav className="navbar">
                    <Link to="/" className="navbar-brand">
                        <FontAwesomeIcon icon={faCalendarDays}/>
                        <span className="navbar-logo-text">
                            Nex<span>Event</span>
                        </span>
                    </Link>

                    <div className="navbar-navigation">
                        <Link to="/">
                            Home
                        </Link>

                        <Link to="/events">
                            Events
                        </Link>

                        {role === "ADMIN" && (
                            <div
                                className="navbar-dropdown"
                            >
                                <button
                                    type="button"
                                    className="navbar-dropdown-trigger"
                                >
                                    Management ▾
                                </button>

                                <div className="navbar-dropdown-menu">
                                    <Link to="/admin/events">
                                        Manage Events
                                    </Link>

                                    <Link to="/admin/categories">
                                        Manage Categories
                                    </Link>

                                    <Link to="/admin/organizers">
                                        Manage Organizers
                                    </Link>
                                </div>
                            </div>
                        )}

                        {isAuthenticated && (
                            <>
                                {role !== "ADMIN" && (
                                    <Link to="/favorites">
                                        Favorites
                                    </Link>
                                )}

                                <Link to="/profile">
                                    Profile
                                </Link>
                            </>
                        )}
                    </div>

                    {isAuthenticated && (
                        <div className="navbar-actions">
                            <button
                                type="button"
                                className="navbar-link-button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}

                    {!isAuthenticated && (
                        <div className="navbar-actions">
                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/register">
                                Register
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;