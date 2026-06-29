import CategoryCard from "../categories/CategoryCard.tsx";
import {faChartLine, faCloud, faGears, faLaptopCode, faRobot, faShieldHalved} from "@fortawesome/free-solid-svg-icons";

const CategoriesSection = () => {
    const categories = [
        {
            name: "Technology",
            icon: faLaptopCode
        },
        {
            name: "Artificial Intelligence",
            icon: faRobot
        },
        {
            name: "Cloud",
            icon: faCloud
        },
        {
            name: "Cybersecurity",
            icon: faShieldHalved
        },
        {
            name: "DevOps",
            icon: faGears
        },
        {
            name: "Data Science",
            icon: faChartLine
        }
    ];

    return (
        <section className="categories-section">
            <div className="app-container">
                <div className="section-header">
                    <h2>Browse by Category</h2>
                    <p>Find professional events based on your interests and expertise.</p>
                </div>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.name}
                            name={category.name}
                            icon={category.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;