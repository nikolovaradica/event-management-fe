import AdminOrganizerForm from "../../components/admin/AdminOrganizerForm.tsx";

const AdminOrganizerFormPage = () => {
    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Add Organizer</h1>
                    <p>Create a new event organizer.</p>
                </section>
                <AdminOrganizerForm />
            </div>
        </main>
    );
};

export default AdminOrganizerFormPage;