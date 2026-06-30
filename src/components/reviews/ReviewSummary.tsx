import StarRating from "./StarRating.tsx";
import type {Review} from "../../types/Review.ts";

type ReviewSummaryProps = {
    reviews: Review[];
};

const ReviewSummary = ({reviews}: ReviewSummaryProps) => {
    const averageRating = reviews.length > 0
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
        : 0;

    return (
        <div className="review-summary">
            <h2>Reviews</h2>
            {reviews.length > 0 ? (
                <>
                    <div className="review-rating">
                        <span className="review-score">
                            {averageRating.toFixed(1)}
                        </span>
                        <StarRating
                            rating={Math.round(averageRating)}
                            readOnly
                        />
                    </div>
                    <p>Based on {reviews.length} review{reviews.length > 1 ? "s" : ""}</p>
                </>
            ) : (
                <p className="no-rating-message">
                    Be the first to rate this event.
                </p>
            )}
        </div>
    );
};

export default ReviewSummary;