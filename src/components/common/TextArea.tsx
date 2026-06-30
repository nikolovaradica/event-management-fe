import type {TextareaHTMLAttributes} from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({className = "", ...props}: TextAreaProps) => {
    return (
        <textarea
            className={`textarea ${className}`}
            {...props}
        />
    );
};

export default TextArea;