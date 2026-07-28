import UserReviewCard from "./UserReviewCard.tsx";
import NoProfileReviews from "./NoProfileReviews.tsx";
import type {UserReview} from "../../types/UserReview.ts";

type ProfileReviewsProps = {
    reviews: UserReview[];
};

const ProfileReviews = ({ reviews }: ProfileReviewsProps) => {
    return (
        <section className="profile-card">
            <div className="profile-card-header">
                <h2>My Reviews</h2>
            </div>
            {reviews.length === 0 ? (
                <NoProfileReviews />
            ) : (
                <>
                    {reviews.map(review => (
                        <UserReviewCard
                            key={review.id}
                            {...review}
                        />
                    ))}
                </>
            )}
        </section>
    );
};

export default ProfileReviews;