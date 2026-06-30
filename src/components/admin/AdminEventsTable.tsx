import AdminEventRow from "./AdminEventsRow.tsx";

const events = [
    {
        id: 1,
        title: "AI Conference 2026",
        category: "Artificial Intelligence",
        organizer: "FINKI",
        city: "Skopje",
        eventDate: "12 Sep 2026"
    },
    {
        id: 2,
        title: "Cloud Summit",
        category: "Cloud",
        organizer: "Microsoft",
        city: "Belgrade",
        eventDate: "20 Sep 2026"
    },
    {
        id: 3,
        title: "Cyber Security Days",
        category: "Cybersecurity",
        organizer: "OWASP",
        city: "Sofia",
        eventDate: "5 Oct 2026"
    }
];

const AdminEventsTable = () => {
    return (
        <div className="admin-table-wrapper">
            <table className="admin-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Organizer</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {events.map(event => (
                    <AdminEventRow
                        key={event.id}
                        {...event}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminEventsTable;