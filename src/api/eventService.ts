import type {EventFilters} from "../types/EventFilters.ts";
import type {PageResponse} from "../types/PageResponse.ts";
import type {AppEvent} from "../types/AppEvent.ts";
import api from "./api.ts";

export const getEvents = async (filters?: EventFilters): Promise<PageResponse<AppEvent>> => {
    const response = await api.get<PageResponse<AppEvent>>("/events", {
        params: filters
    });
    return response.data;
};

export const getEventById = async (id: number): Promise<AppEvent> => {
    const response = await api.get<AppEvent>(`/events/${id}`);
    return response.data;
};

export const getCities = async (): Promise<string[]> => {
    const response = await api.get<string[]>("/events/cities");
    return response.data;
};