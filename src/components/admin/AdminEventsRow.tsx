import {Link} from "react-router-dom";

type AdminEventRowProps = {
    id: number;
    title: string;
    category: string;
    organizer: string;
    city: string;
    eventDate: string;
};

const AdminEventRow = ({id, title, category, organizer, city, eventDate}: AdminEventRowProps) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{category}</td>
            <td>{organizer}</td>
            <td>{city}</td>
            <td>{eventDate}</td>
            <td className="admin-table-actions">
                <Link
                    to={`/admin/events/${id}/edit`}
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

export default AdminEventRow;