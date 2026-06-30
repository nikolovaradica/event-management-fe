type ConfirmDialogProps = {
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    onConfirm: () => void;
    onCancel: () => void;
};

const ConfirmDialog = ({isOpen, title, message, confirmLabel, onConfirm, onCancel}: ConfirmDialogProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="dialog-actions">
                    <button
                        className="btn btn-outline"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={onConfirm}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;