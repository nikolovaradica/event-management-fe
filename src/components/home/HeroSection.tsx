import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="app-container">
                <div className="hero-content">
                    <h1>
                        Discover Your Next
                        <br />
                        <span>Professional Event</span>
                    </h1>

                    <p>
                        Explore conferences, workshops, hackathons and meetups designed for professionals and students.
                    </p>

                    <Link
                        to="/events"
                        className="btn btn-primary"
                    >
                        Browse Events
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;