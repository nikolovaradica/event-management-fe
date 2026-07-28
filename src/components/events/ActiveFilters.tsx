import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import type {ActiveFilter} from "../../types/ActiveFilter.ts";

type ActiveFiltersProps = {
    filters: ActiveFilter[];
    onRemoveFilter: (filter: ActiveFilter) => void;
};

const ActiveFilters = ({ filters, onRemoveFilter }: ActiveFiltersProps) => {
    if (filters.length === 0) {
        return null;
    }

    return (
        <section className="active-filters">
            {filters.map(filter => (
                <button
                    key={`${filter.type}-${filter.label}`}
                    className="filter-chip"
                    onClick={() => onRemoveFilter(filter)}
                >
                    <span>{filter.label}</span>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            ))}
        </section>
    );
};

export default ActiveFilters;