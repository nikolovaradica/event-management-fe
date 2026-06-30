import Input from "../common/Input";
import Select from "../common/Select";
import TextArea from "../common/TextArea";
import {Link} from "react-router-dom";

const AdminEventForm = () => {
    return (
        <form className="form admin-form">
            <div className="form-group">
                <label>Title</label>
                <Input
                    type="text"
                    placeholder="Enter event title"
                />
            </div>

            <div className="form-group">
                <label>Category</label>
                <Select defaultValue="">
                    <option value="">Select category</option>
                </Select>
            </div>

            <div className="form-group">
                <label>Organizer</label>
                <Select defaultValue="">
                    <option value="">Select organizer</option>
                </Select>
            </div>

            <div className="form-group">
                <label>City</label>
                <Input
                    type="text"
                    placeholder="Enter city"
                />
            </div>

            <div className="form-group">
                <label>Venue</label>
                <Input
                    type="text"
                    placeholder="Enter venue"
                />
            </div>

            <div className="form-group">
                <label>Date</label>
                <Input
                    type="date"
                />
            </div>

            <div className="form-group">
                <label>Image URL</label>
                <Input
                    type="text"
                    placeholder="Paste image URL"
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <TextArea
                    rows={6}
                    placeholder="Describe the event..."
                />
            </div>

            <div className="admin-form-actions">
                <Link
                    to="/admin/events"
                    className="btn btn-outline"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Save Event
                </button>

            </div>
        </form>
    );
};

export default AdminEventForm;