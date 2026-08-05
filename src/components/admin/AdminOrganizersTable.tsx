import AdminOrganizerRow from "./AdminOrganizerRow";
import type {Organizer} from "../../types/Organizer.ts";

type AdminOrganizersTableProps = {
    organizers: Organizer[];
    onDelete: () => Promise<void>;
};

const AdminOrganizersTable = ({ organizers, onDelete }: AdminOrganizersTableProps) => {
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
                        onDelete={onDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrganizersTable;