import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import EventsPage from "../pages/events/EventsPage.tsx";
import EventDetailsPage from "../pages/events/EventDetailsPage.tsx";
import CategoriesPage from "../pages/events/CategoriesPage.tsx";
import LoginPage from "../pages/auth/LoginPage.tsx";
import RegisterPage from "../pages/auth/RegisterPage.tsx";
import FavoritesPage from "../pages/favorites/FavoritesPage.tsx";
import ProfilePage from "../pages/profile/ProfilePage.tsx";
import AdminEventsPage from "../pages/admin/AdminEventsPage.tsx";
import AdminEventFormPage from "../pages/admin/AdminEventFormPage.tsx";
import AdminCategoriesPage from "../pages/admin/AdminCategoriesPage.tsx";
import AdminOrganizersPage from "../pages/admin/AdminOrganizersPage.tsx";
import NotFoundPage from "../pages/home/NotFoundPage.tsx";
import MainLayout from "../components/layout/MainLayout.tsx";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage.tsx";
import AdminOrganizerFormPage from "../pages/admin/AdminOrganizerFormPage.tsx";
import AdminCategoryFormPage from "../pages/admin/AdminCategoryFormPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import AdminRoute from "./AdminRoute.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/events/:id" element={<EventDetailsPage />} />

                    <Route path="/categories/:id" element={<CategoriesPage />} />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

                    <Route path="/admin" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
                    <Route path="/admin/events" element={<AdminRoute><AdminEventsPage /></AdminRoute>} />
                    <Route path="/admin/events/new" element={<AdminRoute><AdminEventFormPage /></AdminRoute>} />
                    <Route path="/admin/events/edit/:id" element={<AdminRoute><AdminEventFormPage /></AdminRoute>} />
                    <Route path="/admin/categories" element={<AdminRoute><AdminCategoriesPage /></AdminRoute>} />
                    <Route path="/admin/categories/new" element={<AdminRoute><AdminCategoryFormPage /></AdminRoute>} />
                    <Route path="/admin/categories/:id/edit" element={<AdminRoute><AdminCategoryFormPage /></AdminRoute>} />
                    <Route path="/admin/organizers" element={<AdminRoute><AdminOrganizersPage /></AdminRoute>} />
                    <Route path="/admin/organizers/new" element={<AdminRoute><AdminOrganizerFormPage /></AdminRoute>} />
                    <Route path="/admin/organizers/:id/edit" element={<AdminRoute><AdminOrganizerFormPage /></AdminRoute>} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;