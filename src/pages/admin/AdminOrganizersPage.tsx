import AdminSearchBar from "../../components/admin/AdminSearchBar";
import AdminOrganizersTable from "../../components/admin/AdminOrganizersTable";
import Pagination from "../../components/common/Pagination";

const AdminOrganizersPage = () => {
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
                />
                <AdminOrganizersTable />
                <Pagination
                    currentPage={1}
                    totalPages={3}
                />
            </div>
        </main>
    );
};

export default AdminOrganizersPage;