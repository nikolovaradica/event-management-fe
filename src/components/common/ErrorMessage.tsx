type ErrorMessageProps = {
    message?: string;
};

const ErrorMessage = ({ message = "Something went wrong. Please try again." }: ErrorMessageProps) => {
    return (
        <div className="error-state">
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;