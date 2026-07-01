import type {LoginRequest} from "../types/LoginRequest.ts";
import api from "./api.ts";
import type {RegisterRequest} from "../types/RegisterRequest.ts";
import type {LoginResponse} from "../types/LoginResponse.ts";

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", request);
    return response.data;
};

export const register = async (request: RegisterRequest) => {
    const response = await api.post("/auth/register", request);
    return response.data;
};