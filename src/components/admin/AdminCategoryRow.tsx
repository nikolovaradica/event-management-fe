import {Link} from "react-router-dom";
import type {Category} from "../../types/Category.ts";
import {deleteCategory} from "../../api/categoryService.ts";

type AdminCategoryRowProps = Category & {
    onDelete: () => Promise<void>;
};

const AdminCategoryRow = ({ id, name, onDelete }: AdminCategoryRowProps) => {
    const handleDelete = async () => {
        const confirmed = window.confirm(
            `Delete "${name}"?`
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteCategory(id);
            await onDelete();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td className="admin-table-actions">
                <Link
                    to={`/admin/categories/${id}/edit`}
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

export default AdminCategoryRow;