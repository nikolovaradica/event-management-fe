import StarRating from "../reviews/StarRating.tsx";
import {Link} from "react-router-dom";
import {formatDateTime} from "../../utils/dateUtils.ts";
import type {UserReview} from "../../types/UserReview.ts";

const UserReviewCard = ({eventId, eventTitle, rating, comment, createdAt}: UserReview) => {
    return (
        <article className="user-review-card">
            <div className="user-review-header">
                <div>
                    <Link
                        to={`/events/${eventId}`}
                        className="user-review-event"
                    >
                        {eventTitle}
                    </Link>
                    <span className="review-date">
                        {formatDateTime(createdAt)}
                    </span>
                </div>
                <StarRating
                    rating={rating}
                    readOnly
                />
            </div>
            <p>{comment}</p>
        </article>
    );
};

export default UserReviewCard;