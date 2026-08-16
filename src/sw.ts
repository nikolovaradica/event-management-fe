/// <reference lib="webworker" />

import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
    /^http:\/\/localhost:8080\/api\/events(\?.*)?$/,
    new NetworkFirst({
        cacheName: 'nexevent-events',
        networkTimeoutSeconds: 3,
        plugins: [
            new ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 60 * 60 }),
        ],
    }),
    'GET'
)

registerRoute(
    /^http:\/\/localhost:8080\/api\/events\/\d+$/,
    new NetworkFirst({
        cacheName: 'nexevent-event-details',
        networkTimeoutSeconds: 3,
        plugins: [
            new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 60 * 60 }),
        ],
    }),
    'GET'
)

registerRoute(
    /^http:\/\/localhost:8080\/api\/events\/cities$/,
    new NetworkFirst({
        cacheName: 'nexevent-event-cities',
        networkTimeoutSeconds: 3,
        plugins: [
            new ExpirationPlugin({ maxEntries: 5, maxAgeSeconds: 60 * 60 }),
        ],
    }),
    'GET'
)

self.addEventListener('push', (event) => {
    event.waitUntil(
        (async () => {
            try {
                const data = event.data?.json() ?? {
                    title: 'NexEvent',
                    body: 'You have a new notification.',
                }
                await self.registration.showNotification(data.title, {
                    body: data.body,
                    icon: '/pwa-icon.png',
                    data: {
                        eventId: data.eventId,
                    },
                })
            } catch (error) {
                console.error('showNotification() FAILED:', error)
            }
        })()
    )
})

self.addEventListener('notificationclick', (event) => {
    event.notification.close()

    const eventId = event.notification.data?.eventId
    if (!eventId) {
        return
    }

    event.waitUntil(self.clients.openWindow(`/events/${eventId}`))
})