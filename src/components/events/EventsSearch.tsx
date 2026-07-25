import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Input from "../common/Input.tsx";

type EventsSearchProps = {
    value: string;
    onSearchChange: (value: string) => void;
};

const EventsSearch = ({ value, onSearchChange }: EventsSearchProps) => {
    return (
        <section className="events-search">
            <h1>Explore Events</h1>
            <p>Discover conferences, workshops and meetups tailored to your interests.</p>
            <div className="search-input-wrapper">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="search-icon"
                />
                <Input
                    type="text"
                    placeholder="Search events..."
                    value={value}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
        </section>
    );
};

export default EventsSearch;