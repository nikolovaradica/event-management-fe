import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import FavoriteButton from "./FavoriteButton.tsx";
import type {AppEvent} from "../../types/AppEvent.ts";
import {formatDateTime} from "../../utils/dateUtils.ts";

type EventHeaderProps = {
    event: AppEvent;
    favorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton: boolean;
};

const EventHeader = ({ event, favorite, onFavoriteToggle, showFavoriteButton }: EventHeaderProps) => {
    return (
        <section className="event-header">
            <div className="event-header-content">
                <span className="event-category">
                    {event.category.name}
                </span>
                <h1>
                    {event.title}
                </h1>
                <p className="event-organizer">
                    Hosted by <strong>{event.organizer.name}</strong>
                </p>
                <div className="event-information">
                    <div className="event-information-item">
                        <FontAwesomeIcon icon={faCalendarDays}/>
                        <span>{formatDateTime(event.eventDate, true)}</span>
                    </div>
                    <div className="event-information-item">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{event.city}</span>
                    </div>
                    <div className="event-information-item">
                        <FontAwesomeIcon icon={faBuilding}/>
                        <span>{event.venue}</span>
                    </div>
                </div>
                {showFavoriteButton && (
                    <FavoriteButton
                        favorite={favorite}
                        onToggle={onFavoriteToggle}
                    />
                )}
                <div className="event-header-image">
                    <img
                        src={event.imageUrl}
                        alt={event.title}
                    />
                </div>
            </div>
        </section>
    );
};

export default EventHeader;