import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
                        <Link to="/events">
                            Events
                        </Link>
                    </div>

                    <div className="navbar-actions">
                        <Link to="/login">
                            Login
                        </Link>
                        <Link to="/register">
                            Register
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;