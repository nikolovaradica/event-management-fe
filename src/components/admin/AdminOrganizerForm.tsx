import {Link} from "react-router-dom";
import Input from "../common/Input";
import TextArea from "../common/TextArea";

const AdminOrganizerForm = () => {
    return (
        <form className="form admin-form">
            <div className="form-group">
                <label>Name</label>
                <Input
                    type="text"
                    placeholder="Enter organizer name"
                />
            </div>
            <div className="form-group">
                <label>Website</label>
                <Input
                    type="url"
                    placeholder="https://example.com"
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <TextArea
                    rows={6}
                    placeholder="Describe the organizer..."
                />
            </div>
            <div className="admin-form-actions">
                <Link
                    to="/admin/organizers"
                    className="btn btn-outline"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Save Organizer
                </button>
            </div>
        </form>
    );
};

export default AdminOrganizerForm;