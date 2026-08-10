import {useState} from "react";
import StarRating from "./StarRating";
import TextArea from "../common/TextArea.tsx";
import * as React from "react";
import type {ReviewRequest} from "../../types/ReviewRequest.ts";
import ErrorMessage from "../common/ErrorMessage.tsx";

type ReviewFormProps = {
    onSubmit: (review: ReviewRequest) => Promise<void>;
    submitting: boolean;
    submitError: string | null;
};

const ReviewForm = ({ onSubmit, submitting, submitError }: ReviewFormProps) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!comment.trim()) {
            return;
        }

        try {
            await onSubmit({ rating, comment });
            setRating(5);
            setComment("");
        } catch {
            // Error is already displayed through submitError.
        }
    };

    return (
        <form
            className="review-form"
            onSubmit={handleSubmit}
        >
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
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell others about your experience..."
                />
            </div>
            {submitError && (
                <ErrorMessage message={submitError} />
            )}
            <button
                className="btn btn-primary"
                type="submit"
                disabled={submitting}
            >
                {submitting ? "Submitting..." : "Submit Review"}
            </button>
        </form>
    );
};

export default ReviewForm;