import AdminSearchBar from "../../components/admin/AdminSearchBar";
import Pagination from "../../components/common/Pagination";
import AdminCategoriesTable from "../../components/admin/AdminCategoriesTable.tsx";

const AdminCategoriesPage = () => {
    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Categories</h1>
                    <p>Create, update and manage event categories.</p>
                </section>
                <AdminSearchBar
                    placeholder="Search categories..."
                    buttonLabel="Add Category"
                    buttonTo="/admin/categories/new"
                />
                <AdminCategoriesTable />
                <Pagination
                    currentPage={1}
                    totalPages={2}
                />
            </div>
        </main>
    );
};

export default AdminCategoriesPage;