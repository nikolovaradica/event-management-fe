import EventsSearch from "../../components/events/EventsSearch.tsx";
import FilterPanel from "../../components/events/FilterPanel.tsx";
import ActiveFilters from "../../components/events/ActiveFilters.tsx";
import ResultsHeader from "../../components/events/ResultsHeader.tsx";
import EventsGrid from "../../components/events/EventsGrid.tsx";
import Pagination from "../../components/common/Pagination.tsx";

function EventsPage() {
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
        <main className="events-page">
            <div className="app-container">
                <section className="filter-container">
                    <EventsSearch />
                    <FilterPanel />
                    <ActiveFilters />
                </section>
                <ResultsHeader
                    title="24 Events Found"
                    subtitle="Showing upcoming events."
                />
                <EventsGrid
                    events={events}
                />
                <Pagination
                    currentPage={1}
                    totalPages={10}
                />
            </div>
        </main>
    )
}

export default EventsPage;