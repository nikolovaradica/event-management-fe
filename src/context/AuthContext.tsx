import {createContext, type ReactNode, useContext, useState} from "react";
import type {LoginRequest} from "../types/LoginRequest.ts";
import type {LoginResponse} from "../types/LoginResponse.ts";
import * as authService from "../api/authService";
import type {Role} from "../types/Role.ts";
import type {RegisterRequest} from "../types/RegisterRequest.ts";

type AuthContextType = {
    isAuthenticated: boolean;
    role: Role | null;
    login: (request: LoginRequest) => Promise<LoginResponse>;
    register: (request: RegisterRequest) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ACCESS_TOKEN_KEY = "accessToken";
const ROLE_KEY = "role";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => !!sessionStorage.getItem(ACCESS_TOKEN_KEY)
    );

    const [role, setRole] = useState<Role | null>(
        () => sessionStorage.getItem(ROLE_KEY) as Role | null
    );

    const login = async (request: LoginRequest): Promise<LoginResponse> => {
        const response = await authService.login(request);
        sessionStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
        sessionStorage.setItem(ROLE_KEY, response.role);
        setIsAuthenticated(true);
        setRole(response.role);
        return response;
    };

    const register = async (request: RegisterRequest) => {
        await authService.register(request);
    };

    const logout = () => {
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
        sessionStorage.removeItem(ROLE_KEY);
        setIsAuthenticated(false);
        setRole(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                role,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
};