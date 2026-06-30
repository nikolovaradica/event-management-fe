import {Link} from "react-router-dom";

type AdminOrganizerRowProps = {
    id: number;
    name: string;
    website: string;
};

const AdminOrganizerRow = ({id, name, website}: AdminOrganizerRowProps) => {
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
                <button className="btn btn-danger btn-sm">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default AdminOrganizerRow;