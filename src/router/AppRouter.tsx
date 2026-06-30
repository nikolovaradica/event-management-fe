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

                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/profile" element={<ProfilePage />} />

                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/admin/events" element={<AdminEventsPage />} />
                    <Route path="/admin/events/new" element={<AdminEventFormPage />} />
                    <Route path="/admin/events/edit/:id" element={<AdminEventFormPage />} />
                    <Route path="/admin/categories" element={<AdminCategoriesPage />} />
                    <Route path="/admin/categories/new" element={<AdminCategoryFormPage />} />
                    <Route path="/admin/organizers" element={<AdminOrganizersPage />} />
                    <Route path="/admin/organizers/new" element={<AdminOrganizerFormPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;