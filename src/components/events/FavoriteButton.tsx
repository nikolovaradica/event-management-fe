import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const FavoriteButton = () => {
    return (
        <button className="btn btn-outline">
            <FontAwesomeIcon icon={faHeart} />
            Save Event
        </button>
    );
};

export default FavoriteButton;