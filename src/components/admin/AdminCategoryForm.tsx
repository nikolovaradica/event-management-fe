import {Link} from "react-router-dom";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import type {CategoryRequest} from "../../types/CategoryRequest.ts";
import {useState} from "react";
import * as React from "react";
import ErrorMessage from "../common/ErrorMessage.tsx";

type AdminCategoryFormProps = {
    initialName?: string;
    initialDescription?: string;
    onSubmit: (request: CategoryRequest) => Promise<void>;
    submitting: boolean;
    submitError: string | null;
};

const AdminCategoryForm = ( {initialName = "", initialDescription = "", onSubmit,
                                submitting, submitError }: AdminCategoryFormProps) => {
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit({name, description});
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
                    placeholder="Enter category name"
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <TextArea
                    rows={6}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Describe the category..."
                />
            </div>

            {submitError && (
                <ErrorMessage message={submitError} />
            )}

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
                    disabled={submitting}
                >
                    {submitting ? "Saving..." : "Save Category"}
                </button>
            </div>
        </form>
    );
};

export default AdminCategoryForm;