import AdminEventForm from "../../components/admin/AdminEventForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Category} from "../../types/Category.ts";
import type {Organizer} from "../../types/Organizer.ts";
import type {AppEvent} from "../../types/AppEvent.ts";
import {getCategories} from "../../api/categoryService.ts";
import {getOrganizers} from "../../api/organizerService.ts";
import {createEvent, getEventById, updateEvent} from "../../api/eventService.ts";
import type {EventRequest} from "../../types/EventRequest.ts";

const AdminEventFormPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [categories, setCategories] = useState<Category[]>([]);
    const [organizers, setOrganizers] = useState<Organizer[]>([]);
    const [event, setEvent] = useState<AppEvent | null>(null);

    const loadCategories = async () => {
        try {
            const response = await getCategories({ page: 0, size: 100 });
            setCategories(response.content);
        } catch (error) {
            console.error(error);
        }
    };

    const loadOrganizers = async () => {
        try {
            const response = await getOrganizers({ page: 0, size: 100 });
            setOrganizers(response.content);
        } catch (error) {
            console.error(error);
        }
    };

    const loadEvent = async () => {
        try {
            const response = await getEventById(Number(id));
            setEvent(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (request: EventRequest) => {
        try {
            if (isEdit) {
                await updateEvent( Number(id), request);
            } else {
                await createEvent(request);
            }

            navigate("/admin/events");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadCategories();
        loadOrganizers();

        if (isEdit) {
            loadEvent();
        }
    }, [id]);

    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>{isEdit ? "Edit Event" : "Add Event"}</h1>
                    <p>{isEdit
                        ? "Update event information."
                        : "Create a new professional event."}
                    </p>
                </section>
                <AdminEventForm
                    categories={categories}
                    organizers={organizers}
                    initialTitle={event?.title}
                    initialDescription={event?.description}
                    initialEventDate={event?.eventDate}
                    initialCity={event?.city}
                    initialVenue={event?.venue}
                    initialImageUrl={event?.imageUrl}
                    initialCategoryId={event?.category.id}
                    initialOrganizerId={event?.organizer.id}
                    onSubmit={handleSubmit}
                />
            </div>
        </main>
    );
};

export default AdminEventFormPage;