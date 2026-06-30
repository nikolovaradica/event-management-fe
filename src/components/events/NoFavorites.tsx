import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const NoFavorites = () => {
    return (
        <section className="no-favorites">
            <FontAwesomeIcon
                icon={faHeart}
                className="no-favorites-icon"
            />
            <h2>No Favorite Events Yet</h2>
            <p>Save events you're interested in and they'll appear here.</p>
            <Link
                to="/events"
                className="btn btn-primary"
            >
                Browse Events
            </Link>
        </section>
    );
};

export default NoFavorites;