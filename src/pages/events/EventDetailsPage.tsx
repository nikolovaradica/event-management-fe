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

const EventDetailsPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState<AppEvent | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);

    const loadEvent = async () => {
        if (!id) {
            return;
        }

        try {
            const response = await getEventById(Number(id));
            setEvent(response);
        } catch (error) {
            console.error(error);
        }
    };

    const loadReviews = async () => {
        if (!id) {
            return;
        }

        try {
            const response = await getReviews(Number(id));
            setReviews(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleReviewSubmit = async (review: ReviewRequest) => {
        if (!id) {
            return;
        }

        try {
            await createReview(Number(id), review);
            await loadReviews();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadEvent();
        loadReviews();
    }, [id]);

    if (!event) {
        return (
            <main className="event-details-page">
                <div className="app-container">
                    Loading...
                </div>
            </main>
        );
    }

    return (
        <main className="event-details-page">
            <div className="app-container">
                <EventHeader event={event}/>
                <EventDescription description={event.description} />
                <ReviewsSection
                    reviews={reviews}
                    onReviewSubmit={handleReviewSubmit}
                />
            </div>
        </main>
    );
};

export default EventDetailsPage;