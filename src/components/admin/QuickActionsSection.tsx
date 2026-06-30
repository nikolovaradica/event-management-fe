import QuickActionCard from "./QuickActionCard.tsx";
import {faBuilding, faCalendarDays, faTags} from "@fortawesome/free-solid-svg-icons";

const QuickActionsSection = () => {
    return (
        <section>
            <h2 className="section-title">
                Quick Actions
            </h2>
            <div className="quick-actions-grid">
                <QuickActionCard
                    icon={faCalendarDays}
                    title="Events"
                    description="View, edit or remove events."
                    to="/admin/events"
                />
                <QuickActionCard
                    icon={faTags}
                    title="Categories"
                    description="Manage available event categories."
                    to="/admin/categories"
                />
                <QuickActionCard
                    icon={faBuilding}
                    title="Organizers"
                    description="Manage event organizers."
                    to="/admin/organizers"
                />
            </div>
        </section>
    );
};

export default QuickActionsSection;