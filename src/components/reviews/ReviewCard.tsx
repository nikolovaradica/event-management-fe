import type {Review} from "../../types/Review.ts";
import StarRating from "./StarRating.tsx";

const ReviewCard = ({author, rating, comment, reviewDate}: Review) => {
    return (
        <article className="review-card">
            <div className="review-card-header">
                <div>
                    <h3>{author}</h3>
                    <span className="review-date">
                        {reviewDate}
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