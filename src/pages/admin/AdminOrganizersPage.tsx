import AdminSearchBar from "../../components/admin/AdminSearchBar";
import AdminOrganizersTable from "../../components/admin/AdminOrganizersTable";
import Pagination from "../../components/common/Pagination";
import {useEffect, useState} from "react";
import type {Organizer} from "../../types/Organizer.ts";
import {getOrganizers} from "../../api/organizerService.ts";

const AdminOrganizersPage = () => {
    const [organizers, setOrganizers] = useState<Organizer[]>([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const loadOrganizers = async () => {
        try {
            const response = await getOrganizers({
                page: currentPage,
                search: debouncedSearch,
            });
            setOrganizers(response.content);
            setTotalPages(response.totalPages);
        } catch (error) {
            console.error(error);
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
        loadOrganizers();
    }, [currentPage, debouncedSearch]);

    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Organizers</h1>
                    <p>Create, update and manage event organizers.</p>
                </section>
                <AdminSearchBar
                    placeholder="Search organizers..."
                    buttonLabel="Add Organizer"
                    buttonTo="/admin/organizers/new"
                    search={search}
                    onSearchChange={handleSearchChange}
                />
                <AdminOrganizersTable
                    organizers={organizers}
                    onDelete={loadOrganizers}
                />
                <Pagination
                    currentPage={currentPage + 1}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    );
};

export default AdminOrganizersPage;