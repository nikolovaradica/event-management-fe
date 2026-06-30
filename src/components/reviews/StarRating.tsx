import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as regularStar} from "@fortawesome/free-regular-svg-icons";

type StarRatingProps = {
    rating: number;
    onChange?: (rating: number) => void;
    readOnly?: boolean;
};

const StarRating = ({rating, onChange, readOnly = false}: StarRatingProps) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const displayedRating = hoveredRating || rating;

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map(star => (
                <button
                    key={star}
                    type="button"
                    className="star-button"
                    disabled={readOnly}
                    onClick={() => onChange?.(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                >
                    <FontAwesomeIcon icon={star <= displayedRating ? solidStar : regularStar}/>
                </button>
            ))}
        </div>
    );
};

export default StarRating;