import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.tsx";

const AccountActions = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <section className="profile-card">
            <div className="profile-card-header">
                <h2>Account</h2>
            </div>
            <p className="account-description">
                Sign out of your NexEvent account.
            </p>
            <button className="btn btn-outline" onClick={handleLogout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Logout
            </button>
        </section>
    );
};

export default AccountActions;