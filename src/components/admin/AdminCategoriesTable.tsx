import AdminCategoryRow from "./AdminCategoryRow";
import type {Category} from "../../types/Category.ts";

type AdminCategoriesTableProps = {
    categories: Category[];
    onDelete: () => Promise<void>;
};

const AdminCategoriesTable = ({ categories, onDelete }: AdminCategoriesTableProps) => {
    return (
        <div className="admin-table-wrapper">
            <table className="admin-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {categories.map(category => (
                    <AdminCategoryRow
                        key={category.id}
                        {...category}
                        onDelete={onDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminCategoriesTable;