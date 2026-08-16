import {useEffect, useState} from "react";
import {subscribeToNotifications, unsubscribeFromNotifications} from "../../api/notificationService.js.ts";

const NotificationButton = () => {
    const [loading, setLoading] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const checkSubscription = async () => {
            try {
                if (!("serviceWorker" in navigator)) {
                    return;
                }
                const registration = await navigator.serviceWorker.ready;
                const subscription = await registration.pushManager.getSubscription();
                setEnabled(subscription !== null);
            } catch (error) {
                console.error(error);
            }
        };

        checkSubscription();
    }, []);

    const handleEnableNotifications = async () => {
        setLoading(true);
        setError("");

        try {
            if (!("Notification" in window)) {
                throw new Error("Notifications are not supported.");
            }

            if (!("serviceWorker" in navigator)) {
                throw new Error("Service workers are not supported.");
            }

            if (!("PushManager" in window)) {
                throw new Error("Push notifications are not supported.");
            }

            const permission = await Notification.requestPermission();
            if (permission !== "granted") {
                throw new Error("Notification permission was not granted.");
            }

            const registration = await navigator.serviceWorker.ready;
            const existingSubscription = await registration.pushManager.getSubscription();
            const subscription = existingSubscription ??
                await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(
                        import.meta.env.VITE_VAPID_PUBLIC_KEY
                    ),
                });

            await subscribeToNotifications(subscription);
            setEnabled(true);
        } catch (error) {
            console.error(error);
            setError(error instanceof Error ? error.message : "Cannot enable notifications."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleDisableNotifications = async () => {
        setLoading(true);
        setError("");

        try {
            if (!("serviceWorker" in navigator)) {
                throw new Error("Service workers are not supported.");
            }

            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.getSubscription();
            if (!subscription) {
                setEnabled(false);
                return;
            }

            await subscription.unsubscribe();
            await unsubscribeFromNotifications(subscription.endpoint);
            setEnabled(false);
        } catch (error) {
            console.error(error);
            setError(error instanceof Error ? error.message : "Cannot disable notifications.");
        } finally {
            setLoading(false);
        }
    };

    if (enabled) {
        return (
            <div className="notification-action">
            <span className="notification-status enabled">
                Enabled
            </span>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleDisableNotifications}
                    disabled={loading}
                >
                    {loading ? "Disabling..." : "Disable Notifications"}
                </button>
                {error && (
                    <p className="form-error">
                        {error}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="notification-action">
        <span className="notification-status disabled">
            Disabled
        </span>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleEnableNotifications}
                disabled={loading}
            >
                {loading ? "Enabling..." : "Enable Notifications"}
            </button>
            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}
        </div>
    );
};

const urlBase64ToUint8Array = (base64String: string) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    return Uint8Array.from(
        [...rawData].map(char => char.charCodeAt(0))
    );
};

export default NotificationButton;