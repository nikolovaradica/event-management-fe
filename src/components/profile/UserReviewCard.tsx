import StarRating from "../reviews/StarRating.tsx";
import {Link} from "react-router-dom";

type UserReviewCardProps = {
    eventId: number;
    eventTitle: string;
    rating: number;
    comment: string;
    reviewDate: string;
};

const UserReviewCard = ({eventId, eventTitle, rating, comment, reviewDate}: UserReviewCardProps) => {
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
                        {reviewDate}
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