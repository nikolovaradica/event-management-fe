# NexEvent Frontend

Frontend application for **NexEvent**, a web application for discovering and managing professional technology events.

The application provides event discovery, filtering, authentication, favorites, reviews, profile management, Progressive Web App functionality, offline support, and Web Push notifications.

---

## Technologies

- React
- TypeScript
- Vite
- React Router
- Bootstrap
- Axios
- Vite PWA Plugin

---

## Features

### Event Discovery

Users can browse professional technology events and view detailed information about each event.

The application supports:

- Event listing
- Event search
- Filtering by category
- Filtering by city
- Filtering by date
- Event details
- Event images
- Organizer information
- Event reviews

---

### Categories

Events can be organized into different technology categories.


---

### Authentication

The frontend provides:

- User registration
- User login
- JWT-based authentication
- Protected user functionality
- Logout

The JWT received from the backend is stored on the client and included in authenticated API requests.

---

### Favorites

Authenticated users can:

- Add events to their favorites
- Remove events from their favorites
- View their favorite events

Favorites are also used by the notification system to determine which users should receive reminders for upcoming events.

---

### Reviews

Authenticated users can leave reviews for events.

Users can provide:

- A rating
- A written comment

Existing reviews are displayed on the event details page.

---

### Profile

The profile page allows users to:

- View their account information
- View their reviews
- Manage notifications
- Access account actions

---

## Progressive Web App

NexEvent is implemented as a **Progressive Web App (PWA)** using `vite-plugin-pwa`.

The PWA provides:

- Installability
- Standalone application mode
- Service worker
- Asset caching
- Offline event access
- Push notifications

The application can be installed from the browser and launched as a standalone application.

---

### PWA Manifest

The PWA manifest defines the application identity and appearance.

The application uses:

- `NexEvent` as the application name
- Standalone display mode
- Custom theme and background colors

---

### Service Worker

The service worker is responsible for:

- Precaching application assets
- Runtime caching of event data
- Handling push events
- Displaying push notifications
- Handling notification clicks

---

### Offline Caching

The application uses Workbox `NetworkFirst` strategies for event-related API requests.

The following resources are cached:

```text
GET /api/events
GET /api/events/{id}
GET /api/events/cities
```

When the application is online, the service worker attempts to retrieve the latest data from the backend.

If the network is unavailable, previously cached responses can be used instead.

---

## Push Notifications

NexEvent uses the browser's Web Push API together with VAPID authentication.

Users can enable or disable notifications from their profile.

When notifications are enabled:

1. The browser creates a push subscription.
2. The subscription is sent to the backend.
3. The backend stores the subscription.
4. The backend can send Web Push notifications.
5. The service worker receives the push event.
6. The service worker displays the notification.

---

### Event Reminder Notifications

The application supports reminders for favorited events happening the following day.

The notification contains:

- Event title
- Event time
- Event city
- Event ID

The event ID is stored in the notification data so that clicking the notification can open the corresponding event details page.

---

### Notification Settings

Users can manage push notifications from:

```text
Profile → Notifications
```

When notifications are disabled:

- The browser push subscription is unsubscribed.
- The subscription is removed from the backend.
- The UI changes back to the **Enable Notifications** action.

---

## Project Structure

The frontend follows a component-based React structure:

```text
src/
│
├── api/
│   ├── api.ts
│   ├── eventService.ts
│   ├── notificationService.ts
│   ├── profileService.ts
│   └── ...
│
├── components/
│   ├── common/
│   ├── event/
│   ├── profile/
│   └── ...
│
├── pages/
│   ├── auth/
│   ├── event/
│   ├── profile/
│   └── ...
│
├── types/
│
├── router/
│
├── App.tsx
├── main.tsx
└── sw.ts
```

The application separates:

- Pages
- Reusable components
- API services
- Type definitions
- Routing

---

## API Communication

The frontend communicates with the NexEvent backend through REST APIs.

Axios is used for HTTP requests.

The API client is configured in:

```text
src/api/api.ts
```

API services are separated by functionality, for example:

```text
eventService.ts
profileService.ts
notificationService.ts
```

Authenticated requests include the user's JWT in the `Authorization` header.

---

## Environment Variables

Create a `.env` file in the frontend project root.

The frontend requires the VAPID public key for creating browser push subscriptions:

```env
VITE_VAPID_PUBLIC_KEY=your_vapid_public_key
```

The value must match the public VAPID key configured in the backend.

---

## Running the Frontend

### Prerequisites

Make sure the following are installed:

- Node.js
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file:

```env
VITE_VAPID_PUBLIC_KEY=your_vapid_public_key
```

### 3. Start the development server

```bash
npm run dev
```

The development application is available at:

```text
http://localhost:5173
```

---
## Related Project

The frontend communicates with the **NexEvent Backend**, which provides:

- REST APIs
- Authentication
- Event management
- Categories
- Organizers
- Reviews
- Favorites
