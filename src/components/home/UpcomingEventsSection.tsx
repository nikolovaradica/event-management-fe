import EventCard from "../events/EventCard.tsx";
import EventCarousel from "../events/EventCarousel.tsx";

const UpcomingEventsSection = () => {
    const events = [
        {
            id: 1,
            title: "AI Conference 2026",
            category: "Artificial Intelligence",
            organizer: "FINKI",
            city: "Skopje",
            eventDate: "12 Sep 2026",
            imageUrl:
                "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
        },
        {
            id: 2,
            title: "Cloud Summit",
            category: "Cloud",
            organizer: "Microsoft",
            city: "Belgrade",
            eventDate: "20 Sep 2026",
            imageUrl:
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200"
        },
        {
            id: 3,
            title: "Cyber Security Days",
            category: "Cybersecurity",
            organizer: "OWASP",
            city: "Sofia",
            eventDate: "5 Oct 2026",
            imageUrl:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
        },
        {
            id: 4,
            title: "Cyber Security Days",
            category: "Cybersecurity",
            organizer: "OWASP",
            city: "Sofia",
            eventDate: "5 Oct 2026",
            imageUrl:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
        },
        {
            id: 5,
            title: "Cyber Security Days",
            category: "Cybersecurity",
            organizer: "OWASP",
            city: "Sofia",
            eventDate: "5 Oct 2026",
            imageUrl:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
        },
        {
            id: 6,
            title: "Cyber Security Days",
            category: "Cybersecurity",
            organizer: "OWASP",
            city: "Sofia",
            eventDate: "5 Oct 2026",
            imageUrl:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
        }
    ];

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