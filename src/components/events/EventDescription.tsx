type EventDescriptionProps = {
    description: string;
};

const EventDescription = ({description}: EventDescriptionProps) => {
    return (
        <section className="event-description">
            <h2>About this Event</h2>
            <p>{description}</p>
        </section>
    );
};

export default EventDescription;