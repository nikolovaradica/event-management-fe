import AdminOrganizerRow from "./AdminOrganizerRow";

const organizers = [
    {
        id: 1,
        name: "FINKI",
        website: "https://www.finki.ukim.mk"
    },
    {
        id: 2,
        name: "Microsoft",
        website: "https://www.microsoft.com"
    },
    {
        id: 3,
        name: "OWASP",
        website: "https://owasp.org"
    }
];

const AdminOrganizersTable = () => {
    return (
        <div className="admin-table-wrapper">
            <table className="admin-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {organizers.map(organizer => (
                    <AdminOrganizerRow
                        key={organizer.id}
                        {...organizer}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrganizersTable;