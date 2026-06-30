import ProfileInformation from "../../components/profile/ProfileInformation.tsx";
import ProfileReviews from "../../components/profile/ProfileReviews.tsx";
import AccountActions from "../../components/profile/AccountActions.tsx";

const ProfilePage = () => {
    return (
        <main className="profile-page">
            <div className="app-container">
                <section className="page-header">
                    <h1>My Profile</h1>
                    <p>Manage your account information and review your activity.</p>
                </section>
                <ProfileInformation />
                <ProfileReviews />
                <AccountActions />
            </div>
        </main>
    );
};

export default ProfilePage;