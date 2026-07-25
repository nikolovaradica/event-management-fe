import EventHeader from "../../components/events/EventHeader.tsx";
import type {AppEvent} from "../../types/AppEvent.ts";
import EventDescription from "../../components/events/EventDescription.tsx";
import ReviewsSection from "../../components/reviews/ReviewsSection.tsx";
import type {Review} from "../../types/Review.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventById} from "../../api/eventService.ts";

const EventDetailsPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState<AppEvent | null>(null);

    const reviews: Review[] = [
        {
            id: 1,
            author: "John Peterson",
            rating: 5,
            comment: "Excellent conference with engaging speakers and well-organized workshops. The networking sessions were especially valuable, and I left with several new professional connections. I would definitely attend again next year.",
            reviewDate: "15 September 2026"
        },
        {
            id: 2,
            author: "Emily Carter",
            rating: 4,
            comment: "The presentations were insightful and covered a wide range of AI topics. I would have liked a few more hands-on sessions, but overall it was a fantastic experience.",
            reviewDate: "14 September 2026"
        },
        {
            id: 3,
            author: "Michael Johnson",
            rating: 5,
            comment: "One of the best technology events I've attended. Everything from registration to the venue organization was seamless. The keynote speakers were outstanding.",
            reviewDate: "13 September 2026"
        },
        {
            id: 4,
            author: "Sophia Williams",
            rating: 5,
            comment: "Great atmosphere, interesting discussions, and plenty of opportunities to meet professionals from the industry. Highly recommended for anyone interested in artificial intelligence.",
            reviewDate: "13 September 2026"
        }
    ];

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

    useEffect(() => {
        loadEvent();
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
                <ReviewsSection reviews={reviews} />
            </div>
        </main>
    );
};

export default EventDetailsPage;