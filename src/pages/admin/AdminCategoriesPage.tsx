import AdminSearchBar from "../../components/admin/AdminSearchBar";
import Pagination from "../../components/common/Pagination";
import AdminCategoriesTable from "../../components/admin/AdminCategoriesTable.tsx";
import {useEffect, useState} from "react";
import type {Category} from "../../types/Category.ts";
import {getCategories} from "../../api/categoryService.ts";

const AdminCategoriesPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const loadCategories = async () => {
        try {
            const response = await getCategories({
                page: currentPage,
                search: debouncedSearch,
            });
            setCategories(response.content);
            setTotalPages(response.totalPages);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setCurrentPage(0);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page - 1);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, 600);

        return () => clearTimeout(timeout);
    }, [search]);

    useEffect(() => {
        loadCategories();
    }, [currentPage, debouncedSearch]);

    return (
        <main className="admin-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>Categories</h1>
                    <p>Create, update and manage event categories.</p>
                </section>
                <AdminSearchBar
                    placeholder="Search categories..."
                    buttonLabel="Add Category"
                    buttonTo="/admin/categories/new"
                    search={search}
                    onSearchChange={handleSearchChange}
                />
                <AdminCategoriesTable
                    categories={categories}
                    onDelete={loadCategories}
                />
                <Pagination
                    currentPage={currentPage + 1}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    );
};

export default AdminCategoriesPage;