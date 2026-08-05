import AdminOrganizerForm from "../../components/admin/AdminOrganizerForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Organizer} from "../../types/Organizer.ts";
import {createOrganizer, getOrganizerById, updateOrganizer} from "../../api/organizerService.ts";
import type {OrganizerRequest} from "../../types/OrganizerRequest.ts";

const AdminOrganizerFormPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [organizer, setOrganizer] = useState<Organizer | null>(null);

    const loadOrganizer = async () => {
        try {
            const response = await getOrganizerById(Number(id));
            setOrganizer(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (request: OrganizerRequest) => {
        try {
            if (isEdit) {
                await updateOrganizer(Number(id), request);
            } else {
                await createOrganizer(request);
            }

            navigate("/admin/organizers");
        } catch (error) {
            console.error(error);
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
                <AdminOrganizerForm
                    initialName={organizer?.name}
                    initialWebsite={organizer?.website}
                    initialDescription={organizer?.description}
                    onSubmit={handleSubmit}
                />
            </div>
        </main>
    );
};

export default AdminOrganizerFormPage;