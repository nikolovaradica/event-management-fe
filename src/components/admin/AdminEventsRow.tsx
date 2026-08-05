import {Link} from "react-router-dom";
import type {AppEvent} from "../../types/AppEvent.ts";
import {deleteEvent} from "../../api/eventService.ts";
import {formatDateTime} from "../../utils/dateUtils.ts";

type AdminEventRowProps = AppEvent & {
    onDelete: () => Promise<void>;
};

const AdminEventRow = ({id, title, category, organizer, city, eventDate, onDelete}: AdminEventRowProps) => {
    const handleDelete = async () => {
        const confirmed = window.confirm(
            `Delete "${title}"?`
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteEvent(id);
            await onDelete();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <tr>
            <td>{title}</td>
            <td>{category.name}</td>
            <td>{organizer.name}</td>
            <td>{city}</td>
            <td>{formatDateTime(eventDate, true)}</td>
            <td className="admin-table-actions">
                <Link
                    to={`/admin/events/${id}/edit`}
                    className="btn btn-outline btn-sm"
                >
                    Edit
                </Link>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default AdminEventRow;