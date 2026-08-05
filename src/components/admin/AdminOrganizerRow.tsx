import {Link} from "react-router-dom";
import type {Organizer} from "../../types/Organizer.ts";
import {deleteOrganizer} from "../../api/organizerService.ts";

type AdminOrganizerRowProps = Organizer & {
    onDelete: () => Promise<void>;
};

const AdminOrganizerRow = ({ id, name, website, onDelete }: AdminOrganizerRowProps) => {
    const handleDelete = async () => {
        const confirmed = window.confirm(
            `Delete "${name}"?`
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteOrganizer(id);
            await onDelete();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td>
                <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {website}
                </a>
            </td>
            <td className="admin-table-actions">
                <Link
                    to={`/admin/organizers/${id}/edit`}
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

export default AdminOrganizerRow;