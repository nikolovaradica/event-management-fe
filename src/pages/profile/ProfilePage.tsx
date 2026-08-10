import ProfileInformation from "../../components/profile/ProfileInformation.tsx";
import ProfileReviews from "../../components/profile/ProfileReviews.tsx";
import AccountActions from "../../components/profile/AccountActions.tsx";
import type { Profile } from "../../types/Profile.ts";
import {useEffect, useState} from "react";
import {getProfile, getProfileReviews} from "../../api/profileService.ts";
import type {UserReview} from "../../types/UserReview.ts";
import Loading from "../../components/common/Loading.tsx";
import ErrorMessage from "../../components/common/ErrorMessage.tsx";

const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [reviews, setReviews] = useState<UserReview[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadProfile = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getProfile();
            setProfile(response);
        } catch (error) {
            console.error(error);
            setError("Unable to load your profile.");
        } finally {
            setLoading(false);
        }
    };

    const loadReviews = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getProfileReviews();
            setReviews(response);
        } catch (error) {
            console.error(error);
            setError("Unable to load your reviews.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProfile();
        loadReviews();
    }, []);

    return (
        <main className="profile-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>My Profile</h1>
                    <p>Manage your account information and review your activity.</p>
                </section>

                {loading ? (
                    <Loading />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : profile ? (
                    <>
                        <ProfileInformation
                            profile={profile}
                        />
                        <ProfileReviews
                            reviews={reviews}
                        />
                        <AccountActions />
                    </>
                )  : (
                    <ErrorMessage message="Unable to load your profile." />
                )}
            </div>
        </main>
    );
};

export default ProfilePage;