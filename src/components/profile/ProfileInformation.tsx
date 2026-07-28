import type {Profile} from "../../types/Profile.ts";

type ProfileInformationProps = {
    profile: Profile;
};

const ProfileInformation = ({ profile }: ProfileInformationProps) => {
    return (
        <section className="profile-card">
            <div className="profile-card-header">
                <h2>Personal Information</h2>
            </div>
            <div className="profile-information">
                <div className="profile-information-item">
                    <label>First Name</label>
                    <p>{profile.firstName}</p>
                </div>
                <div className="profile-information-item">
                    <label>Last Name</label>
                    <p>{profile.lastName}</p>
                </div>
                <div className="profile-information-item">
                    <label>Username</label>
                    <p>{profile.username}</p>
                </div>
                <div className="profile-information-item">
                    <label>Email</label>
                    <p>{profile.email}</p>
                </div>
            </div>
        </section>
    );
};

export default ProfileInformation;