import AdminEventRow from "./AdminEventsRow.tsx";
import type {AppEvent} from "../../types/AppEvent.ts";

type AdminEventsTableProps = {
    events: AppEvent[];
    onDelete: () => Promise<void>;
};

const AdminEventsTable = ({ events, onDelete }: AdminEventsTableProps) => {
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
                        onDelete={onDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminEventsTable;