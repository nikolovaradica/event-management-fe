import {Link} from "react-router-dom";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import type {CategoryRequest} from "../../types/CategoryRequest.ts";
import {useEffect, useState} from "react";
import * as React from "react";

type AdminCategoryFormProps = {
    initialName?: string;
    initialDescription?: string;
    onSubmit: (request: CategoryRequest) => Promise<void>;
};

const AdminCategoryForm = ( {initialName = "", initialDescription = "", onSubmit }: AdminCategoryFormProps) => {
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit({name, description});
    };

    useEffect(() => {
        setName(initialName ?? "");
    }, [initialName]);

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