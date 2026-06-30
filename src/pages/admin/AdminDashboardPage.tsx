import QuickActionsSection from "../../components/admin/QuickActionsSection.tsx";

const AdminDashboardPage = () => {
    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Admin Dashboard</h1>
                    <p>Manage events, categories and organizers from one place.</p>
                </section>
                <QuickActionsSection />
            </div>
        </main>
    );
};

export default AdminDashboardPage;