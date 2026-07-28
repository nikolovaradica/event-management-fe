import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";

type FavoriteButtonProps = {
    favorite: boolean;
    onToggle: () => void;
};

const FavoriteButton = ({ favorite, onToggle }: FavoriteButtonProps) => {
    return (
        <button
            className="btn btn-outline"
            onClick={onToggle}
        >
            <FontAwesomeIcon
                icon={favorite ? faHeartSolid : faHeartRegular}
            />
            {favorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    );
};

export default FavoriteButton;