import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const AccountActions = () => {
    return (
        <section className="profile-card">
            <div className="profile-card-header">
                <h2>Account</h2>
            </div>
            <p className="account-description">
                Sign out of your NexEvent account.
            </p>
            <button className="btn btn-outline">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Logout
            </button>
        </section>
    );
};

export default AccountActions;