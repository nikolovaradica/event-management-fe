import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";

type EventCardProps = {
    id: number;
    title: string;
    imageUrl: string;
    category: string;
    organizer: string;
    city: string;
    eventDate: string;
};

const EventCard = ({id, title, imageUrl, category, organizer, city, eventDate}: EventCardProps) => {
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
                    {category}
                </span>
                <h3>
                    {title}
                </h3>
                <p className="event-organizer">
                    Hosted by {organizer}
                </p>
                <div className="event-meta">
                    <span>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        {eventDate}
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