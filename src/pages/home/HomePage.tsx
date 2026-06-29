import HeroSection from "../../components/home/HeroSection.tsx";
import UpcomingEventsSection from "../../components/home/UpcomingEventsSection.tsx";
import CategoriesSection from "../../components/home/CategoriesSection.tsx";
import FeaturesSection from "../../components/home/FeaturesSection.tsx";
import CtaSection from "../../components/home/CtaSection.tsx";

function HomePage() {
    return (
        <>
            <HeroSection />
            <UpcomingEventsSection />
            <CategoriesSection />
            <FeaturesSection />
            <CtaSection />
        </>
    );
}

export default HomePage;