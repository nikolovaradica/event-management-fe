import AdminCategoryRow from "./AdminCategoryRow";

const categories = [
    {
        id: 1,
        name: "Artificial Intelligence",
        eventsCount: 12
    },
    {
        id: 2,
        name: "Cloud",
        eventsCount: 5
    },
    {
        id: 3,
        name: "Cybersecurity",
        eventsCount: 18
    }
];

const AdminCategoriesTable = () => {
    return (
        <div className="admin-table-wrapper">
            <table className="admin-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Events</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {categories.map(category => (
                    <AdminCategoryRow
                        key={category.id}
                        {...category}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminCategoriesTable;