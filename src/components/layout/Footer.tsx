import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="app-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>NexEvent</span>
                    </div>

                    <p className="footer-tagline">
                        Discover conferences, workshops and meetups.
                    </p>

                    <p className="footer-copyright">
                        © 2026 NexEvent
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;