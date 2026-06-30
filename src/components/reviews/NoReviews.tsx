import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NoReviews = () => {
    return (
        <div className="no-reviews">
            <FontAwesomeIcon
                icon={faCommentDots}
                className="no-reviews-icon"
            />
            <h3>No Reviews Yet</h3>
            <p>Be the first to share your experience and help others decide whether this event is right for them.</p>
        </div>
    );
};

export default NoReviews;