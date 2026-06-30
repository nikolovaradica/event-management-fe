import {Link} from "react-router-dom";
import Input from "../common/Input";
import TextArea from "../common/TextArea";

const AdminCategoryForm = () => {
    return (
        <form className="form admin-form">
            <div className="form-group">
                <label>Name</label>
                <Input
                    type="text"
                    placeholder="Enter category name"
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <TextArea
                    rows={6}
                    placeholder="Describe the category..."
                />
            </div>
            <div className="admin-form-actions">
                <Link
                    to="/admin/categories"
                    className="btn btn-outline"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Save Category
                </button>
            </div>
        </form>
    );
};

export default AdminCategoryForm;