import AdminCategoryForm from "../../components/admin/AdminCategoryForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import type {CategoryRequest} from "../../types/CategoryRequest.ts";
import {createCategory, getCategoryById, updateCategory} from "../../api/categoryService.ts";
import {useEffect, useState} from "react";
import type {Category} from "../../types/Category.ts";

const AdminCategoryFormPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [category, setCategory] = useState<Category | null>(null);

    const loadCategory = async () => {
        try {
            const response = await getCategoryById(Number(id));
            setCategory(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (request: CategoryRequest) => {
        try {
            if (isEdit) {
                await updateCategory(Number(id), request);
            } else {
                await createCategory(request);
            }

            navigate("/admin/categories");
        } catch (error) {
            console.error(error);
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
                <AdminCategoryForm
                    initialName={category?.name}
                    initialDescription={category?.description}
                    onSubmit={handleSubmit}
                />
            </div>
        </main>
    );
};

export default AdminCategoryFormPage;