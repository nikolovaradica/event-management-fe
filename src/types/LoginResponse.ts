import type {Role} from "./Role.ts";

export type LoginResponse = {
    accessToken: string;
    role: Role;
};