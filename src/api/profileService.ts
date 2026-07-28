import type { Profile } from "../types/Profile";
import api from "./api";
import type {UserReview} from "../types/UserReview.ts";

export const getProfile = async (): Promise<Profile> => {
    const response = await api.get<Profile>("/profile");
    return response.data;
};

export const getProfileReviews = async (): Promise<UserReview[]> => {
    const response = await api.get<UserReview[]>("/profile/reviews");
    return response.data;
};