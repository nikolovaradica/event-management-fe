import Pagination from "../../components/common/Pagination.tsx";
import AdminSearchBar from "../../components/admin/AdminSearchBar.tsx";
import AdminEventsTable from "../../components/admin/AdminEventsTable.tsx";

const AdminEventsPage = () => {
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
                />
                <AdminEventsTable />
                <Pagination
                    currentPage={1}
                    totalPages={3}
                />
            </div>
        </main>
    );
};

export default AdminEventsPage;