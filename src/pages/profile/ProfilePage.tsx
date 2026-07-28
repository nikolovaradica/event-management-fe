import ProfileInformation from "../../components/profile/ProfileInformation.tsx";
import ProfileReviews from "../../components/profile/ProfileReviews.tsx";
import AccountActions from "../../components/profile/AccountActions.tsx";
import type { Profile } from "../../types/Profile.ts";
import {useEffect, useState} from "react";
import {getProfile, getProfileReviews} from "../../api/profileService.ts";
import type {UserReview} from "../../types/UserReview.ts";

const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [reviews, setReviews] = useState<UserReview[]>([]);

    const loadProfile = async () => {
        try {
            const response = await getProfile();
            setProfile(response);
        } catch (error) {
            console.error(error);
        }
    };

    const loadReviews = async () => {
        try {
            const response = await getProfileReviews();
            setReviews(response);
        } catch (error) {
            console.error(error);
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
                {profile && (
                    <ProfileInformation
                        profile={profile}
                    />
                )}
                <ProfileReviews
                    reviews={reviews}
                />
                <AccountActions />
            </div>
        </main>
    );
};

export default ProfilePage;