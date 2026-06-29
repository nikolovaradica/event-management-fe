import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="app-container">
                <div className="cta-content">
                    <h2>Ready to Discover Your Next Opportunity?</h2>
                    <p>Explore conferences, workshops and meetups that inspire learning, networking and professional growth.</p>
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
};

export default CTASection;