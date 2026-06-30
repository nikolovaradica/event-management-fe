import ResultsHeader from "../../components/events/ResultsHeader.tsx";
import EventsGrid from "../../components/events/EventsGrid.tsx";
import Pagination from "../../components/common/Pagination.tsx";
import NoFavorites from "../../components/events/NoFavorites.tsx";

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

const FavoritesPage = () => {
    return (
        <main className="favorites-page">
            <div className="app-container">
                {events.length === 0 ? (
                    <NoFavorites />
                ) : (
                    <>
                        <section className="page-header">
                            <h1>My Favorite Events</h1>
                            <p>Keep track of events you've saved for later.</p>
                        </section>
                        <ResultsHeader
                            title={`${events.length} Favorite Event${events.length !== 1 ? "s" : ""}`}
                        />
                        <EventsGrid
                            events={events}
                        />
                        <Pagination
                            currentPage={1}
                            totalPages={1}
                        />
                    </>
                )}
            </div>
        </main>
    );
};

export default FavoritesPage;