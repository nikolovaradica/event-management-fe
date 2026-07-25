import EventCard from "../events/EventCard.tsx";
import EventCarousel from "../events/EventCarousel.tsx";
import {useEffect, useState} from "react";
import type {AppEvent} from "../../types/AppEvent.ts";
import {getEvents} from "../../api/eventService.ts";

const UpcomingEventsSection = () => {
    const [events, setEvents] = useState<AppEvent[]>([]);

    const loadUpcomingEvents = async () => {
        const response = await getEvents({ page: 0, size: 6});
        setEvents(response.content);
    };

    useEffect(() => {
        loadUpcomingEvents();
    }, []);

    return (
        <section className="upcoming-events-section">
            <div className="app-container">
                <div className="section-header">
                    <h2>Upcoming Events</h2>
                    <p>
                        Explore conferences, workshops and meetups
                        designed for professionals and students.
                    </p>
                </div>
                <EventCarousel>
                    {events.map(event => (
                        <EventCard
                            key={event.id}
                            {...event}
                        />
                    ))}
                </EventCarousel>
            </div>
        </section>
    );
}

export default UpcomingEventsSection;