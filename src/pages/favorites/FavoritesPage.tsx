import ResultsHeader from "../../components/events/ResultsHeader.tsx";
import EventsGrid from "../../components/events/EventsGrid.tsx";
import NoFavorites from "../../components/events/NoFavorites.tsx";
import {useEffect, useState} from "react";
import type {Favorite} from "../../types/Favorite.ts";
import {getFavorites} from "../../api/favoriteService.ts";
import type {AppEvent} from "../../types/AppEvent.ts";
import Loading from "../../components/common/Loading.tsx";
import ErrorMessage from "../../components/common/ErrorMessage.tsx";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<Favorite[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const events: AppEvent[] = favorites.map(favorite => ({
        id: favorite.eventId,
        title: favorite.eventTitle,
        eventDate: favorite.eventDate,
        city: favorite.city,
        venue: favorite.venue,
        imageUrl: favorite.imageUrl,
        createdAt: "",
        category: {
            id: 0,
            name: favorite.categoryName
        },
        organizer: {
            id: 0,
            name: favorite.organizerName
        },
        description: ""
    }));

    const loadFavorites = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getFavorites();
            setFavorites(response);
        } catch (error) {
            console.error(error);
            setError("Unable to load your favorite events.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    return (
        <main className="favorites-page">
            <div className="app-container">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : favorites.length === 0 ? (
                    <NoFavorites />
                ) : (
                    <>
                        <section className="page-header">
                            <h1>My Favorite Events</h1>
                            <p>Keep track of events you've saved for later.</p>
                        </section>
                        <ResultsHeader
                            title={`${favorites.length} Favorite Event${favorites.length !== 1 ? "s" : ""}`}
                        />
                        <EventsGrid
                            events={events}
                        />
                    </>
                )}
            </div>
        </main>
    );
};

export default FavoritesPage;