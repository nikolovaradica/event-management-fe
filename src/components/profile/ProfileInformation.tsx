const ProfileInformation = () => {
    return (
        <section className="profile-card">
            <div className="profile-card-header">
                <h2>Personal Information</h2>
            </div>
            <div className="profile-information">
                <div className="profile-information-item">
                    <label>First Name</label>
                    <p>John</p>
                </div>
                <div className="profile-information-item">
                    <label>Last Name</label>
                    <p>Smith</p>
                </div>
                <div className="profile-information-item">
                    <label>Username</label>
                    <p>johnsmith</p>
                </div>
                <div className="profile-information-item">
                    <label>Email</label>
                    <p>johnsmith@email.com</p>
                </div>
            </div>
            <button className="btn btn-outline">
                Edit Profile
            </button>
        </section>
    );
};

export default ProfileInformation;