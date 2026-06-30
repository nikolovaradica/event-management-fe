import type {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...props }: InputProps) => {
    return (
        <input
            className={`input ${className}`}
            {...props}
        />
    );
};

export default Input;