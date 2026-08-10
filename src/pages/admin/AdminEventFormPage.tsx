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
import Loading from "../../components/common/Loading.tsx";
import ErrorMessage from "../../components/common/ErrorMessage.tsx";

const AdminEventFormPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [categories, setCategories] = useState<Category[]>([]);
    const [organizers, setOrganizers] = useState<Organizer[]>([]);
    const [event, setEvent] = useState<AppEvent | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const loadCategories = async () => {
        try {
            const response = await getCategories({ page: 0, size: 100 });
            setCategories(response.content);
        } catch (error) {
            console.error(error);
            setError("Unable to load categories. Please try again.");
        }
    };

    const loadOrganizers = async () => {
        try {
            const response = await getOrganizers({ page: 0, size: 100 });
            setOrganizers(response.content);
        } catch (error) {
            console.error(error);
            setError("Unable to load organizers. Please try again.");
        }
    };

    const loadEvent = async () => {
        try {
            const response = await getEventById(Number(id));
            setEvent(response);
        } catch (error) {
            console.error(error);
            setError("Unable to load the event. Please try again.");
        }
    };

    const handleSubmit = async (request: EventRequest) => {
        setSubmitting(true);
        setSubmitError(null);

        try {
            if (isEdit) {
                await updateEvent(Number(id), request);
            } else {
                await createEvent(request);
            }

            navigate("/admin/events");
        } catch (error) {
            console.error(error);
            setSubmitError(
                isEdit
                    ? "Unable to update the event. Please try again."
                    : "Unable to create the event. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);

            await loadCategories();
            await loadOrganizers();

            if (isEdit) {
                await loadEvent();
            }

            setLoading(false);
        };

        loadData();
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

                {loading ? (
                    <Loading />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : (
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
                        submitting={submitting}
                        submitError={submitError}
                    />
                )}
            </div>
        </main>
    );
};

export default AdminEventFormPage;