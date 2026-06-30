import NoEventsFound from "./NoEventsFound.tsx";
import EventCard from "./EventCard.tsx";
import type {AppEvent} from "../../types/AppEvent.ts";

type EventsGridProps = {
    events: AppEvent[];
};

const EventsGrid = ({ events }: EventsGridProps) => {
    if (events.length === 0) {
        return <NoEventsFound />;
    }

    return (
        <section className="events-grid">
            {events.map(event => (
                <EventCard
                    key={event.id}
                    {...event}
                />
            ))}
        </section>
    );
};

export default EventsGrid;