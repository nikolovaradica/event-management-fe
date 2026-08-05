import {Link} from "react-router-dom";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import type {OrganizerRequest} from "../../types/OrganizerRequest.ts";
import {useEffect, useState} from "react";
import * as React from "react";

type AdminOrganizerFormProps = {
    initialName?: string;
    initialWebsite?: string;
    initialDescription?: string;
    onSubmit: (request: OrganizerRequest) => Promise<void>;
};

const AdminOrganizerForm = ({ initialName = "", initialWebsite = "", initialDescription = "", onSubmit }: AdminOrganizerFormProps) => {
    const [name, setName] = useState(initialName);
    const [website, setWebsite] = useState(initialWebsite);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit({name, website, description});
    };

    useEffect(() => {
        setName(initialName ?? "");
    }, [initialName]);

    useEffect(() => {
        setWebsite(initialWebsite ?? "");
    }, [initialWebsite]);

    useEffect(() => {
        setDescription(initialDescription ?? "");
    }, [initialDescription]);

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