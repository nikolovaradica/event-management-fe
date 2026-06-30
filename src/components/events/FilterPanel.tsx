import Select from "../common/Select.tsx";

const FilterPanel = () => {
    return (
        <section className="filter-panel">
            <div className="filter-group">
                <label className="filter-label">
                    Category
                </label>
                <Select defaultValue="">
                    <option value="">All Categories</option>
                </Select>
            </div>

            <div className="filter-group">
                <label className="filter-label">
                    City
                </label>
                <Select defaultValue="">
                    <option value="">All Cities</option>
                </Select>
            </div>

            <div className="filter-group">
                <label className="filter-label">
                    Date
                </label>
                <Select defaultValue="">
                    <option value="">All Dates</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Next 3 Months</option>
                </Select>
            </div>
        </section>
    );
};

export default FilterPanel;