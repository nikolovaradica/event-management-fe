import {Link} from "react-router-dom";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import type {OrganizerRequest} from "../../types/OrganizerRequest.ts";
import {useState} from "react";
import * as React from "react";
import ErrorMessage from "../common/ErrorMessage.tsx";

type AdminOrganizerFormProps = {
    initialName?: string;
    initialWebsite?: string;
    initialDescription?: string;
    onSubmit: (request: OrganizerRequest) => Promise<void>;
    submitting: boolean;
    submitError: string | null;
};

const AdminOrganizerForm = ({ initialName = "", initialWebsite = "", initialDescription = "",
                                onSubmit, submitting, submitError }: AdminOrganizerFormProps) => {
    const [name, setName] = useState(initialName);
    const [website, setWebsite] = useState(initialWebsite);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit({name, website, description});
    };

    return (
        <form
            className="form admin-form"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label>Name</label>
                <Input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter organizer name"
                />
            </div>
            <div className="form-group">
                <label>Website</label>
                <Input
                    type="url"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                    placeholder="https://example.com"
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <TextArea
                    rows={6}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Describe the organizer..."
                />
            </div>

            {submitError && (
                <ErrorMessage message={submitError} />
            )}

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
                    disabled={submitting}
                >
                    {submitting ? "Saving..." : "Save Organizer"}
                </button>
            </div>
        </form>
    );
};

export default AdminOrganizerForm;