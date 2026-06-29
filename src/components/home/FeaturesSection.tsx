import {faCommentDots, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard.tsx";

const FeaturesSection = () => {
    const features = [
        {
            icon: faMagnifyingGlass,
            title: "Discover Events",
            description: "Explore conferences, workshops and meetups tailored to your professional interests."
        },
        {
            icon: faHeart,
            title: "Save Favorites",
            description: "Bookmark interesting events and quickly access them whenever you need."
        },
        {
            icon: faCommentDots,
            title: "Share Reviews",
            description: "Leave reviews after attending events and help others discover quality experiences."
        }
    ];

    return (
        <section className="features-section">
            <div className="app-container">
                <div className="section-header">
                    <h2>Why NexEvent?</h2>
                    <p>Discover and share events through a modern platform designed for students and professionals.</p>
                </div>
                <div className="features-grid">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;