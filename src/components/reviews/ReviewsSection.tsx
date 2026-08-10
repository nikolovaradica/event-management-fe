import type {Review} from "../../types/Review.ts";
import ReviewSummary from "./ReviewSummary.tsx";
import ReviewCard from "./ReviewCard.tsx";
import ReviewForm from "./ReviewForm.tsx";
import NoReviews from "./NoReviews.tsx";
import type {ReviewRequest} from "../../types/ReviewRequest.ts";

type ReviewsSectionProps = {
    reviews: Review[];
    onReviewSubmit: (review: ReviewRequest) => Promise<void>;
    reviewSubmitting: boolean;
    reviewSubmitError: string | null;
};

const ReviewsSection = ({ reviews, onReviewSubmit, reviewSubmitting,
                            reviewSubmitError }: ReviewsSectionProps) => {
    return (
        <section className="reviews-section">
            <ReviewSummary reviews={reviews}/>
            {reviews.length === 0 ? (
                <NoReviews />
            ) : (
                reviews.map(review => (
                    <ReviewCard
                        key={review.id}
                        {...review}
                    />
                ))
            )}
            <ReviewForm
                onSubmit={onReviewSubmit}
                submitting={reviewSubmitting}
                submitError={reviewSubmitError}
            />
        </section>
    );
};

export default ReviewsSection;