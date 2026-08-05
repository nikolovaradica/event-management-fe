import type {AdminSearchPaginationFilters} from "../types/AdminSearchPaginationFilters.ts";
import type {Organizer} from "../types/Organizer.ts";
import type {PageResponse} from "../types/PageResponse.ts";
import api from "./api.ts";
import type {OrganizerRequest} from "../types/OrganizerRequest.ts";

export const getOrganizers = async (filters?: AdminSearchPaginationFilters): Promise<PageResponse<Organizer>> => {
    const response = await api.get(
        "/organizers",
        { params: filters }
    );
    return response.data;
};

export const getOrganizerById = async (id: number): Promise<Organizer> => {
    const response = await api.get(`/organizers/${id}`);
    return response.data;
};

export const createOrganizer = async (request: OrganizerRequest): Promise<Organizer> => {
    const response = await api.post(
        "/organizers",
        request
    );
    return response.data;
};

export const updateOrganizer = async (id: number, request: OrganizerRequest): Promise<Organizer> => {
    const response = await api.put(
        `/organizers/${id}`,
        request
    );
    return response.data;
};

export const deleteOrganizer = async (id: number): Promise<void> => {
    await api.delete(`/organizers/${id}`);
};