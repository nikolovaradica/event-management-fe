import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OfflineIndicator from "../common/OfflineIndicator.tsx";
import InstallPrompt from "../common/InstallPrompt.tsx";

const MainLayout = () => {
    return (
        <>
            <Header />
            <InstallPrompt />
            <OfflineIndicator />
            <main className="content-wrapper">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;