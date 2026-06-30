import AdminCategoryForm from "../../components/admin/AdminCategoryForm.tsx";

const AdminCategoryFormPage = () => {
    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Add Category</h1>
                    <p>Create a new event category.</p>
                </section>
                <AdminCategoryForm />
            </div>
        </main>
    );
};

export default AdminCategoryFormPage;