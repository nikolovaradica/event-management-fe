import type {Category} from "../types/Category.ts";
import api from "./api.ts";
import type {AdminSearchPaginationFilters} from "../types/AdminSearchPaginationFilters.ts";
import type {PageResponse} from "../types/PageResponse.ts";
import type { CategoryRequest } from "../types/CategoryRequest.ts";

export const getCategories = async (params?: AdminSearchPaginationFilters): Promise<PageResponse<Category>> => {
    const response = await api.get<PageResponse<Category>>(
        "/categories", { params }
    );
    return response.data;
};

export const getCategoryById = async (id: number): Promise<Category> => {
    const response = await api.get<Category>(`/categories/${id}`);
    return response.data;
};

export const createCategory = async (request: CategoryRequest): Promise<Category> => {
    const response = await api.post<Category>("/categories", request);
    return response.data;
};

export const updateCategory = async (id: number, request: CategoryRequest): Promise<Category> => {
    const response = await api.put<Category>(`/categories/${id}`, request);
    return response.data;
};

export const deleteCategory = async (id: number): Promise<void> => {
    await api.delete(`/categories/${id}`);
};