import AdminCategoryForm from "../../components/admin/AdminCategoryForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import type {CategoryRequest} from "../../types/CategoryRequest.ts";
import {createCategory, getCategoryById, updateCategory} from "../../api/categoryService.ts";
import {useEffect, useState} from "react";
import type {Category} from "../../types/Category.ts";
import Loading from "../../components/common/Loading.tsx";
import ErrorMessage from "../../components/common/ErrorMessage.tsx";

const AdminCategoryFormPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [category, setCategory] = useState<Category | null>(null);

    const [loading, setLoading] = useState(isEdit);
    const [error, setError] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const loadCategory = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getCategoryById(Number(id));
            setCategory(response);
        } catch (error) {
            console.error(error);
            setError("Unable to load the category. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (request: CategoryRequest) => {
        setSubmitting(true);
        setSubmitError(null);

        try {
            if (isEdit) {
                await updateCategory(Number(id), request);
            } else {
                await createCategory(request);
            }

            navigate("/admin/categories");
        } catch (error) {
            console.error(error);
            setSubmitError(
                isEdit
                    ? "Unable to update the category. Please try again."
                    : "Unable to create the category. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (isEdit) {
            loadCategory();
        }
    }, [id]);

    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>{isEdit ? "Edit Category" : "Add Category"}</h1>
                    <p>{isEdit
                        ? "Update category information."
                        : "Create a new event category."}
                    </p>
                </section>

                {loading ? (
                    <Loading />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <>
                        <AdminCategoryForm
                            initialName={category?.name}
                            initialDescription={category?.description}
                            onSubmit={handleSubmit}
                            submitting={submitting}
                            submitError={submitError}
                        />
                    </>
                )}
            </div>
        </main>
    );
};

export default AdminCategoryFormPage;