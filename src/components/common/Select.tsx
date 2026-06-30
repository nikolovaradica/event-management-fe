import type {SelectHTMLAttributes} from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ className = "", children, ...props }: SelectProps) => {
    return (
        <select
            className={`select ${className}`}
            {...props}
        >
            {children}
        </select>
    );
};

export default Select;