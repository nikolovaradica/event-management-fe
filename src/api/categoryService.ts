import type {Category} from "../types/Category.ts";
import api from "./api.ts";

export const getCategories = async (): Promise<Category[]> => {
    const response = await api.get<Category[]>("/categories");
    return response.data;
};