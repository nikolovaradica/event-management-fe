import AdminOrganizerForm from "../../components/admin/AdminOrganizerForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Organizer} from "../../types/Organizer.ts";
import {createOrganizer, getOrganizerById, updateOrganizer} from "../../api/organizerService.ts";
import type {OrganizerRequest} from "../../types/OrganizerRequest.ts";
import Loading from "../../components/common/Loading.tsx";
import ErrorMessage from "../../components/common/ErrorMessage.tsx";

const AdminOrganizerFormPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [organizer, setOrganizer] = useState<Organizer | null>(null);

    const [loading, setLoading] = useState(isEdit);
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const loadOrganizer = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getOrganizerById(Number(id));
            setOrganizer(response);
        } catch (error) {
            console.error(error);
            setError("Unable to load the organizer. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (request: OrganizerRequest) => {
        setSubmitting(true);
        setSubmitError(null);

        try {
            if (isEdit) {
                await updateOrganizer(Number(id), request);
            } else {
                await createOrganizer(request);
            }

            navigate("/admin/organizers");
        } catch (error) {
            console.error(error);
            setSubmitError(
                isEdit
                    ? "Unable to update the organizer. Please try again."
                    : "Unable to create the organizer. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (isEdit) {
            loadOrganizer();
        }
    }, [id]);

    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>{isEdit ? "Edit Organizer" : "Add Organizer"}</h1>
                    <p>{isEdit
                        ? "Update organizer information."
                        : "Create a new event organizer."}
                    </p>
                </section>

                {loading ? (
                    <Loading />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <AdminOrganizerForm
                        initialName={organizer?.name}
                        initialWebsite={organizer?.website}
                        initialDescription={organizer?.description}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        submitError={submitError}
                    />
                )}
            </div>
        </main>
    );
};

export default AdminOrganizerFormPage;