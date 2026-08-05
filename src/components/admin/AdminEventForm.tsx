import Input from "../common/Input";
import Select from "../common/Select";
import TextArea from "../common/TextArea";
import {Link} from "react-router-dom";
import type {EventRequest} from "../../types/EventRequest.ts";
import type {Category} from "../../types/Category.ts";
import type {Organizer} from "../../types/Organizer.ts";
import {useEffect, useState} from "react";
import * as React from "react";

type AdminEventFormProps = {
    categories: Category[];
    organizers: Organizer[];
    initialTitle?: string;
    initialDescription?: string;
    initialEventDate?: string;
    initialCity?: string;
    initialVenue?: string;
    initialImageUrl?: string;
    initialCategoryId?: number;
    initialOrganizerId?: number;
    onSubmit: (request: EventRequest) => Promise<void>;
};

const AdminEventForm = ({ categories, organizers, initialTitle, initialDescription, initialEventDate, initialCity, initialVenue,
                        initialImageUrl, initialCategoryId, initialOrganizerId, onSubmit }: AdminEventFormProps) => {
    const [title, setTitle] = useState(initialTitle ?? "");
    const [description, setDescription] = useState(initialDescription ?? "");
    const [eventDate, setEventDate] = useState(initialEventDate ?? "");
    const [city, setCity] = useState(initialCity ?? "");
    const [venue, setVenue] = useState(initialVenue ?? "");
    const [imageUrl, setImageUrl] = useState(initialImageUrl ?? "");
    const [categoryId, setCategoryId] = useState(initialCategoryId?.toString() ?? "");
    const [organizerId, setOrganizerId] = useState(initialOrganizerId?.toString() ?? "");

    useEffect(() => {
        setTitle(initialTitle ?? "");
    }, [initialTitle]);

    useEffect(() => {
        setDescription(initialDescription ?? "");
    }, [initialDescription]);

    useEffect(() => {
        setEventDate(initialEventDate ?? "");
    }, [initialEventDate]);

    useEffect(() => {
        setCity(initialCity ?? "");
    }, [initialCity]);

    useEffect(() => {
        setVenue(initialVenue ?? "");
    }, [initialVenue]);

    useEffect(() => {
        setImageUrl(initialImageUrl?? "");
    }, [initialImageUrl]);

    useEffect(() => {
        setCategoryId(
            initialCategoryId?.toString() ?? ""
        );
    }, [initialCategoryId]);

    useEffect(() => {
        setOrganizerId(
            initialOrganizerId?.toString() ?? ""
        );
    }, [initialOrganizerId]);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit({
            title,
            description,
            eventDate,
            city,
            venue,
            imageUrl,
            categoryId: Number(categoryId),
            organizerId: Number(organizerId),
        });
    };

    return (
        <form
            className="form admin-form"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label>Title</label>
                <Input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Enter event title"
                />
            </div>

            <div className="form-group">
                <label>Category</label>
                <Select
                    value={categoryId}
                    onChange={e => setCategoryId(e.target.value)}
                >
                    <option value="">
                        Select category
                    </option>

                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </Select>
            </div>

            <div className="form-group">
                <label>Organizer</label>
                <Select
                    value={organizerId}
                    onChange={e => setOrganizerId(e.target.value)}
                >
                    <option value="">
                        Select organizer
                    </option>

                    {organizers.map(organizer => (
                        <option
                            key={organizer.id}
                            value={organizer.id}
                        >
                            {organizer.name}
                        </option>
                    ))}
                </Select>
            </div>

            <div className="form-group">
                <label>City</label>
                <Input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Enter city"
                />
            </div>

            <div className="form-group">
                <label>Venue</label>
                <Input
                    type="text"
                    value={venue}
                    onChange={e => setVenue(e.target.value)}
                    placeholder="Enter venue"
                />
            </div>

            <div className="form-group">
                <label>Date</label>
                <Input
                    type="datetime-local"
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Image URL</label>
                <Input
                    type="text"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="Paste image URL"
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <TextArea
                    rows={6}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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