import api from "./api.ts";

export const subscribeToNotifications = async (subscription: PushSubscription): Promise<void> => {
    const subscriptionJson = subscription.toJSON();
    await api.post("/notifications/subscriptions", {
        endpoint: subscriptionJson.endpoint,
        p256dh: subscriptionJson.keys?.p256dh,
        auth: subscriptionJson.keys?.auth,
    });
};

export const unsubscribeFromNotifications = async (endpoint: string): Promise<void> => {
    await api.delete("/notifications/subscriptions", {
        data: { endpoint, },
    });
};