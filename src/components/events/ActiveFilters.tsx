import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const ActiveFilters = () => {
    const filters = [
        "Artificial Intelligence",
        "Skopje",
        "This Month"
    ];

    if (filters.length === 0) {
        return null;
    }

    return (
        <section className="active-filters">
            {filters.map(filter => (
                <button
                    key={filter}
                    className="filter-chip"
                >
                    <span>{filter}</span>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            ))}
        </section>
    );
};

export default ActiveFilters;