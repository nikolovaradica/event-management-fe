import EventsSearch from "../../components/events/EventsSearch.tsx";
import FilterPanel from "../../components/events/FilterPanel.tsx";
import ActiveFilters from "../../components/events/ActiveFilters.tsx";
import ResultsHeader from "../../components/events/ResultsHeader.tsx";
import EventsGrid from "../../components/events/EventsGrid.tsx";
import Pagination from "../../components/common/Pagination.tsx";
import {useEffect, useState} from "react";
import type {AppEvent} from "../../types/AppEvent.ts";
import {getCities, getEvents} from "../../api/eventService.ts";
import {getCategories} from "../../api/categoryService.ts";
import type {Category} from "../../types/Category.ts";
import type {DateFilter} from "../../types/DateFilter.ts";
import {getDateRange} from "../../utils/dateFilterUtils.ts";
import type {ActiveFilter} from "../../types/ActiveFilter.ts";

function EventsPage() {
    const [events, setEvents] = useState<AppEvent[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>("");

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);

    const activeFilters: ActiveFilter[] = [];
    if (selectedCategory) {
        const category = categories.find(c => c.id === selectedCategory);
        if (category) {
            activeFilters.push({
                type: "category",
                label: category.name
            });
        }
    }
    if (selectedCity) {
        activeFilters.push({
            type: "city",
            label: selectedCity
        });
    }
    if (selectedDateFilter) {
        switch (selectedDateFilter) {
            case "THIS_WEEK":
                activeFilters.push({
                    type: "date",
                    label: "This Week"
                });
                break;
            case "THIS_MONTH":
                activeFilters.push({
                    type: "date",
                    label: "This Month"
                });
                break;
            case "NEXT_3_MONTHS":
                activeFilters.push({
                    type: "date",
                    label: "Next 3 Months"
                });
                break;
        }
    }

    const loadEvents = async () => {
        const { from, to } = getDateRange(selectedDateFilter);

        try {
            const response = await getEvents({
                page: currentPage,
                search: debouncedSearch,
                category: selectedCategory,
                city: selectedCity || undefined,
                from,
                to
            });

            setEvents(response.content);
            setTotalPages(response.totalPages);
            setTotalEvents(response.totalElements);
        } catch (error) {
            console.error(error);
        }
    };

    const loadCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(response);
        } catch (error) {
            console.error(error);
        }
    };

    const loadCities = async () => {
        try {
            const response = await getCities();
            setCities(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page - 1);
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setCurrentPage(0);
    };

    const handleCategoryChange = (categoryId: number | undefined) => {
        setSelectedCategory(categoryId);
        setCurrentPage(0);
    };

    const handleCityChange = (city: string) => {
        setSelectedCity(city);
        setCurrentPage(0);
    };

    const handleDateFilterChange = (filter: DateFilter) => {
        setSelectedDateFilter(filter);
        setCurrentPage(0);
    };

    const handleRemoveFilter = (filter: ActiveFilter) => {
        switch (filter.type) {
            case "category":
                setSelectedCategory(undefined);
                break;

            case "city":
                setSelectedCity("");
                break;

            case "date":
                setSelectedDateFilter("");
                break;
        }
        setCurrentPage(0);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, 600);

        return () => clearTimeout(timeout);
    }, [search]);

    useEffect(() => {
        loadEvents();
    }, [currentPage, debouncedSearch, selectedCategory, selectedCity, selectedDateFilter]);

    useEffect(() => {
        loadCategories();
        loadCities();
    }, []);

    return (
        <main className="events-page">
            <div className="app-container">
                <section className="filter-container">
                    <EventsSearch
                        value={search}
                        onSearchChange={handleSearchChange}
                    />
                    <FilterPanel
                        categories={categories}
                        cities={cities}
                        selectedCategory={selectedCategory}
                        selectedCity={selectedCity}
                        selectedDateFilter={selectedDateFilter}
                        onCategoryChange={handleCategoryChange}
                        onCityChange={handleCityChange}
                        onDateFilterChange={handleDateFilterChange}
                    />
                    <ActiveFilters
                        filters={activeFilters}
                        onRemoveFilter={handleRemoveFilter}
                    />
                </section>
                <ResultsHeader
                    title={`${totalEvents} Events Found`}
                    subtitle="Showing upcoming events."
                />
                <EventsGrid
                    events={events}
                />
                <Pagination
                    currentPage={currentPage + 1}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    )
}

export default EventsPage;