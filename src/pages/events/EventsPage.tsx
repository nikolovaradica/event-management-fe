import EventsSearch from "../../components/events/EventsSearch.tsx";
import FilterPanel from "../../components/events/FilterPanel.tsx";
import ActiveFilters from "../../components/events/ActiveFilters.tsx";
import ResultsHeader from "../../components/events/ResultsHeader.tsx";
import EventsGrid from "../../components/events/EventsGrid.tsx";
import Pagination from "../../components/common/Pagination.tsx";
import {useEffect, useState} from "react";
import type {AppEvent} from "../../types/AppEvent.ts";
import {getEvents} from "../../api/eventService.ts";

function EventsPage() {
    const [events, setEvents] = useState<AppEvent[]>([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);

    const loadEvents = async () => {
        try {
            const response = await getEvents({
                page: currentPage,
                search: debouncedSearch,
            });

            setEvents(response.content);
            setTotalPages(response.totalPages);
            setTotalEvents(response.totalElements);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page - 1);
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setCurrentPage(0);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, 600);

        return () => clearTimeout(timeout);
    }, [search]);

    useEffect(() => {
        loadEvents();
    }, [currentPage, debouncedSearch]);

    return (
        <main className="events-page">
            <div className="app-container">
                <section className="filter-container">
                    <EventsSearch
                        value={search}
                        onSearchChange={handleSearchChange}
                    />
                    <FilterPanel />
                    <ActiveFilters />
                </section>
                <ResultsHeader
                    title={`${totalEvents} Events Found`}
                    subtitle="Showing upcoming events."
                />
                <EventsGrid
                    events={events}
                />
                <Pagination
                    currentPage={currentPage + 1}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    )
}

export default EventsPage;