import Pagination from "../../components/common/Pagination.tsx";
import AdminSearchBar from "../../components/admin/AdminSearchBar.tsx";
import AdminEventsTable from "../../components/admin/AdminEventsTable.tsx";
import {useEffect, useState} from "react";
import type {AppEvent} from "../../types/AppEvent.ts";
import {getEvents} from "../../api/eventService.ts";
import Loading from "../../components/common/Loading.tsx";
import ErrorMessage from "../../components/common/ErrorMessage.tsx";

const AdminEventsPage = () => {
    const [events, setEvents] = useState<AppEvent[]>([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadEvents = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getEvents({
                page: currentPage,
                search: debouncedSearch,
            });

            setEvents(response.content);
            setTotalPages(response.totalPages);
        } catch (error) {
            console.error(error);
            setError("Unable to load events. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setCurrentPage(0);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page - 1);
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
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Events</h1>
                    <p>Create, update and manage events on the platform.</p>
                </section>
                <AdminSearchBar
                    placeholder="Search events..."
                    buttonLabel="Add Event"
                    buttonTo="/admin/events/new"
                    search={search}
                    onSearchChange={handleSearchChange}
                />

                {loading ? (
                    <Loading />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <>
                        <AdminEventsTable
                            events={events}
                            onDelete={loadEvents}
                        />
                        <Pagination
                            currentPage={currentPage + 1}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </div>
        </main>
    );
};

export default AdminEventsPage;