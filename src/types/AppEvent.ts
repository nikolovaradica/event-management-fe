export type AppEvent = {
    id: number;
    title: string;
    description: string;
    eventDate: string;
    city: string;
    venue: string;
    imageUrl: string;
    createdAt: string;
    category: {
        id: number;
        name: string;
    };
    organizer: {
        id: number;
        name: string;
    };
};