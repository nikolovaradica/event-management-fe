import type {Review} from "../../types/Review.ts";
import StarRating from "./StarRating.tsx";
import {formatDateTime} from "../../utils/dateUtils.ts";

const ReviewCard = ({rating, comment, createdAt, username}: Review) => {
    return (
        <article className="review-card">
            <div className="review-card-header">
                <div>
                    <h3>{username}</h3>
                    <span className="review-date">
                        {formatDateTime(createdAt)}
                    </span>
                </div>
                <StarRating rating={rating} readOnly />
            </div>
            <p>
                {comment}
            </p>
        </article>
    );

};

export default ReviewCard;