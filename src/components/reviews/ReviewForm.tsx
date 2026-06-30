import { useState } from "react";
import StarRating from "./StarRating";
import TextArea from "../common/TextArea.tsx";

const ReviewForm = () => {
    const [rating, setRating] = useState(5);

    return (
        <form className="review-form">
            <h3>Share Your Experience</h3>
            <div className="review-form-group">
                <label>Rating</label>
                <StarRating
                    rating={rating}
                    onChange={setRating}
                />
            </div>
            <div className="review-form-group">
                <label>Comment</label>
                <TextArea
                    rows={5}
                    placeholder="Tell others about your experience..."
                />
            </div>
            <button className="btn btn-primary">
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;