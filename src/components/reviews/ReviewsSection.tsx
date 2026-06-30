import type {Review} from "../../types/Review.ts";
import ReviewSummary from "./ReviewSummary.tsx";
import ReviewCard from "./ReviewCard.tsx";
import ReviewForm from "./ReviewForm.tsx";
import NoReviews from "./NoReviews.tsx";

type ReviewsSectionProps = {
    reviews: Review[];
};

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
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
            <ReviewForm />
        </section>
    );
};

export default ReviewsSection;