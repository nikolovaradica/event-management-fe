import UserReviewCard from "./UserReviewCard.tsx";
import NoProfileReviews from "./NoProfileReviews.tsx";
import type {UserReview} from "../../types/UserReview.ts";

const reviews: UserReview[] = [
    {
        id: 1,
        eventId: 1,
        eventTitle: "AI Conference 2026",
        rating: 5,
        comment: "Excellent conference with engaging speakers and well-organized workshops. The networking sessions were especially valuable, and I left with several new professional connections. I would definitely attend again next year.",
        reviewDate: "15 September 2026"
    },
    {
        id: 2,
        eventId: 2,
        eventTitle: "Cloud Summit",
        rating: 4,
        comment: "The presentations were insightful and covered a wide range of AI topics. I would have liked a few more hands-on sessions, but overall it was a fantastic experience.",
        reviewDate: "14 September 2026"
    },
    {
        id: 3,
        eventId: 3,
        eventTitle: "Cyber Security Days",
        rating: 5,
        comment: "One of the best technology events I've attended. Everything from registration to the venue organization was seamless. The keynote speakers were outstanding.",
        reviewDate: "13 September 2026"
    }
];

const ProfileReviews = () => {
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