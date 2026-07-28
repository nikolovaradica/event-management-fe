import Select from "../common/Select.tsx";
import type {Category} from "../../types/Category.ts";
import type {DateFilter} from "../../types/DateFilter.ts";

type FilterPanelProps = {
    categories: Category[];
    cities: string[];
    selectedCategory?: number;
    selectedCity: string;
    selectedDateFilter: DateFilter;
    onCategoryChange: (categoryId: number | undefined) => void;
    onCityChange: (city: string) => void;
    onDateFilterChange: (filter: DateFilter) => void;
};

const FilterPanel = ({ categories, cities, selectedCategory, selectedCity, selectedDateFilter,
                         onCategoryChange, onCityChange, onDateFilterChange }: FilterPanelProps) => {
    return (
        <section className="filter-panel">
            <div className="filter-group">
                <label className="filter-label">
                    Category
                </label>
                <Select
                    value={selectedCategory ?? ""}
                    onChange={(e) =>
                        onCategoryChange(e.target.value === "" ? undefined : Number(e.target.value))
                    }
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </Select>
            </div>

            <div className="filter-group">
                <label className="filter-label">
                    City
                </label>
                <Select
                    value={selectedCity}
                    onChange={(e) => onCityChange(e.target.value)}
                >
                    <option value="">All Cities</option>
                    {cities.map(city => (
                        <option
                            key={city}
                            value={city}
                        >
                            {city}
                        </option>
                    ))}
                </Select>
            </div>

            <div className="filter-group">
                <label className="filter-label">
                    Date
                </label>
                <Select
                    value={selectedDateFilter}
                    onChange={(e) =>
                        onDateFilterChange(e.target.value as DateFilter)
                    }
                >
                    <option value="">All Dates</option>
                    <option value="THIS_WEEK">This Week</option>
                    <option value="THIS_MONTH">This Month</option>
                    <option value="NEXT_3_MONTHS">Next 3 Months</option>
                </Select>
            </div>
        </section>
    );
};

export default FilterPanel;