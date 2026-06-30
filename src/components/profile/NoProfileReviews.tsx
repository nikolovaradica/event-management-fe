import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const NoProfileReviews = () => {
    return (
        <div className="no-profile-reviews">
            <FontAwesomeIcon
                icon={faStar}
                className="no-profile-reviews-icon"
            />
            <h3>No Reviews Yet</h3>
            <p>Attend an event and share your experience with the community.</p>
            <Link
                to="/events"
                className="btn btn-primary"
            >
                Browse Events
            </Link>
        </div>
    );
};

export default NoProfileReviews;