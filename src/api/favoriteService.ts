import api from "./api.ts";
import type { Favorite } from "../types/Favorite.ts";

export const getFavorites = async (): Promise<Favorite[]> => {
    const response = await api.get<Favorite[]>("/favorites");
    return response.data;
};

export const addFavorite = async (eventId: number): Promise<Favorite> => {
    const response = await api.post<Favorite>(`/favorites/${eventId}`);
    return response.data;
};

export const removeFavorite = async (eventId: number): Promise<void> => {
    await api.delete(`/favorites/${eventId}`);
};

export const isFavorite = async (eventId: number): Promise<boolean> => {
    const response = await api.get<boolean>(`/favorites/${eventId}`);
    return response.data;
};