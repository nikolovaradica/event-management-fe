import NotificationButton from "./NotificationButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";

const ProfileNotifications = () => {
    return (
        <section className="profile-section notification-card">
            <div className="notification-content">
                <div
                    className="notification-icon"
                    aria-hidden="true"
                >
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="notification-info">
                    <div className="notification-heading">
                        <h2>Notifications</h2>
                    </div>
                    <p>
                        Get reminders about events you've added to your favorites, including events happening tomorrow.
                    </p>
                </div>
            </div>
            <NotificationButton />
        </section>
    );
};

export default ProfileNotifications;