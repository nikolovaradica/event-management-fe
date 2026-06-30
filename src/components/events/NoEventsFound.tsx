import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";

const NoEventsFound = () => {
    return (
        <section className="no-events">
            <FontAwesomeIcon
                icon={faCalendarXmark}
                className="no-events-icon"
            />
            <h2>No Events Found</h2>
            <p>We couldn't find any events matching your search criteria. Try adjusting your filters or search for something else.</p>
        </section>
    );
};

export default NoEventsFound;