import AdminEventForm from "../../components/admin/AdminEventForm.tsx";

const AdminEventFormPage = () => {
    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Add Event</h1>
                    <p>Create a new professional event.</p>
                </section>
                <AdminEventForm />
            </div>
        </main>
    );
};

export default AdminEventFormPage;