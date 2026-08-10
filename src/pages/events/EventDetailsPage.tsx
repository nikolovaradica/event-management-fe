import EventHeader from "../../components/events/EventHeader.tsx";
import type {AppEvent} from "../../types/AppEvent.ts";
import EventDescription from "../../components/events/EventDescription.tsx";
import ReviewsSection from "../../components/reviews/ReviewsSection.tsx";
import type {Review} from "../../types/Review.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventById} from "../../api/eventService.ts";
import {createReview, getReviews} from "../../api/reviewService.ts";
import type {ReviewRequest} from "../../types/ReviewRequest.ts";
import {addFavorite, isFavorite, removeFavorite} from "../../api/favoriteService.ts";
import {useAuth} from "../../context/AuthContext.tsx";
import Loading from "../../components/common/Loading.tsx";
import ErrorMessage from "../../components/common/ErrorMessage.tsx";

const EventDetailsPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState<AppEvent | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [favorite, setFavorite] = useState(false);

    const [eventLoading, setEventLoading] = useState(true);
    const [eventError, setEventError] = useState<string | null>(null);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [reviewsError, setReviewsError] = useState<string | null>(null);
    const [reviewSubmitting, setReviewSubmitting] = useState(false);
    const [reviewSubmitError, setReviewSubmitError] = useState<string | null>(null);

    const { isAuthenticated } = useAuth();

    const loadEvent = async () => {
        if (!id) {
            return;
        }

        setEventLoading(true);
        setEventError(null);

        try {
            const response = await getEventById(Number(id));
            setEvent(response);
        } catch (error) {
            console.error(error);
            setEventError("Unable to load this event. Please try again.");
        } finally {
            setEventLoading(false);
        }
    };

    const loadReviews = async () => {
        if (!id) {
            return;
        }

        setReviewsLoading(true);
        setReviewsError(null);

        try {
            const response = await getReviews(Number(id));
            setReviews(response);
        } catch (error) {
            console.error(error);
            setReviewsError("Unable to load reviews.");
        } finally {
            setReviewsLoading(false);
        }
    };

    const loadFavorite = async () => {
        if (!id) {
            return;
        }

        try {
            const response = await isFavorite(Number(id));
            setFavorite(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleReviewSubmit = async (review: ReviewRequest) => {
        if (!id) {
            return;
        }

        setReviewSubmitting(true);
        setReviewSubmitError(null);

        try {
            await createReview(Number(id), review);
            await loadReviews();
        } catch (error) {
            console.error(error);
            setReviewSubmitError("Unable to submit your review. Please try again.");
            throw error;
        } finally {
            setReviewSubmitting(false);
        }
    };

    const handleFavoriteToggle = async () => {
        if (!id) {
            return;
        }

        try {
            if (favorite) {
                await removeFavorite(Number(id));
                setFavorite(false);
            } else {
                await addFavorite(Number(id));
                setFavorite(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadEvent();
        loadReviews();
        if (isAuthenticated) {
            loadFavorite();
        }
    }, [id]);

    return (
        <main className="event-details-page">
            <div className="app-container">
                {eventLoading ? (
                    <Loading/>
                ) : eventError || !event ? (
                    <ErrorMessage
                        message={eventError ?? "Event not found."}
                    />
                ) : (
                    <>
                        <EventHeader
                            event={event}
                            favorite={favorite}
                            onFavoriteToggle={handleFavoriteToggle}
                            showFavoriteButton={isAuthenticated}
                        />

                        <EventDescription
                            description={event.description}
                        />

                        {reviewsLoading ? (
                            <Loading/>
                        ) : reviewsError ? (
                            <ErrorMessage
                                message={reviewsError}
                            />
                        ) : (
                            <ReviewsSection
                                reviews={reviews}
                                onReviewSubmit={handleReviewSubmit}
                                reviewSubmitting={reviewSubmitting}
                                reviewSubmitError={reviewSubmitError}
                            />
                        )}
                    </>
                )}

            </div>
        </main>
    );
};

export default EventDetailsPage;