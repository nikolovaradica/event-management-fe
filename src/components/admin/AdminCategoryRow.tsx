import {Link} from "react-router-dom";

type AdminCategoryRowProps = {
    id: number;
    name: string;
    eventsCount: number;
};

const AdminCategoryRow = ({id, name, eventsCount}: AdminCategoryRowProps) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {eventsCount} Event{eventsCount !== 1 ? "s" : ""}
            </td>
            <td className="admin-table-actions">
                <Link
                    to={`/admin/categories/${id}/edit`}
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

export default AdminCategoryRow;