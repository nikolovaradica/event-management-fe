import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import type {AppEvent} from "../../types/AppEvent.ts";
import {formatEventDate} from "../../utils/dateUtils.ts";

const EventCard = ({id, title, imageUrl, category, organizer, city, eventDate}: AppEvent) => {
    return (
        <Link
            to={`/events/${id}`}
            className="event-card"
        >
            <div className="event-card-image">
                <img src={imageUrl} alt={title}/>
            </div>
            <div className="event-card-content">
                <span className="event-category">
                    {category.name}
                </span>
                <h3>
                    {title}
                </h3>
                <p className="event-organizer">
                    Hosted by {organizer.name}
                </p>
                <div className="event-meta">
                    <span>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        {formatEventDate(eventDate)}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {city}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default EventCard;