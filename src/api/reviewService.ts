import type {Review} from "../types/Review.ts";
import api from "./api.ts";
import type {ReviewRequest} from "../types/ReviewRequest.ts";

export const getReviews = async (eventId: number): Promise<Review[]> => {
    const response = await api.get<Review[]>(`/events/${eventId}/reviews`);
    return response.data;
};

export const createReview = async (eventId: number, request: ReviewRequest): Promise<Review> => {
    const response = await api.post<Review>(`/events/${eventId}/reviews`, request);
    return response.data;
};